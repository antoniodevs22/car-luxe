import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin, Send, CheckCircle2, Car, Clock } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-hot-toast';

export function Booking() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    carSize: 'medio',
    serviceId: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('servicos')
        .select('id, nome')
        .eq('ativo', true);
      
      if (!error && data) {
        setServices(data);
        if (data.length > 0) {
          setFormData(prev => ({ ...prev, serviceId: data[0].id }));
        }
      }
    }
    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 1. Upsert Client (using phone as unique identifier if possible, but schema doesn't have unique constraint, so we just insert or search)
      // For simplicity in this version, we search by phone
      let { data: client, error: clientFetchError } = await supabase
        .from('clientes')
        .select('id')
        .eq('telefone', formData.phone)
        .single();

      if (!client) {
        const { data: newClient, error: clientError } = await supabase
          .from('clientes')
          .insert([{ 
            nome: formData.name, 
            telefone: formData.phone, 
            email: formData.email 
          }])
          .select()
          .single();
        
        if (clientError) throw clientError;
        client = newClient;
      }

      // 2. Create Vehicle
      const { data: vehicle, error: vehicleError } = await supabase
        .from('veiculos')
        .insert([{
          cliente_id: client.id,
          marca: formData.carBrand,
          modelo: formData.carModel,
          porte: formData.carSize
        }])
        .select()
        .single();

      if (vehicleError) throw vehicleError;

      // 3. Create Appointment
      const dataHora = `${formData.date}T${formData.time}:00`;
      const { error: agendamentoError } = await supabase
        .from('agendamentos')
        .insert([{
          cliente_id: client.id,
          veiculo_id: vehicle.id,
          data_hora: dataHora,
          servicos_ids: [formData.serviceId],
          status: 'pendente'
        }]);

      if (agendamentoError) throw agendamentoError;

      setSuccess(true);
      toast.success('Agendamento solicitado com sucesso!');
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Erro ao processar agendamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-background border-t border-bg-border relative overflow-hidden">
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Reserve seu Horário
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight text-text-primary mb-12">
              Transforme seu veículo <br />
              <span className="text-gold-main">Hoje mesmo</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-bg-border rounded-lg">
                  <Phone className="w-5 h-5 text-gold-main" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-mono font-bold">Telefone / WhatsApp</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">+55 (11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-bg-border rounded-lg">
                  <MapPin className="w-5 h-5 text-gold-main" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-mono font-bold">Showroom</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">Av. Europa, 1234 - Jardins, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-bg-border rounded-lg">
                  <Calendar className="w-5 h-5 text-gold-main" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1 font-mono font-bold">Atendimento</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">Seg a Sex: 08h - 19h | Sáb: 09h - 13h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            className="p-10 bg-bg-secondary/40 border border-bg-border rounded-2xl backdrop-blur-xl relative"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-gold-main/10 border border-gold-main/20 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-gold-main" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-text-primary mb-4">Solicitação Enviada</h3>
                <p className="text-text-secondary max-w-xs font-light">
                  Recebemos seus dados. Um de nossos especialistas entrará em contato em breve para confirmar seu agendamento.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-10 text-xs font-bold text-gold-main uppercase tracking-[0.3em] underline underline-offset-8"
                >
                  Fazer outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva"
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary placeholder:text-white/10 focus:border-gold-main/50 focus:outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(11) 99999-9999"
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary placeholder:text-white/10 focus:border-gold-main/50 focus:outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Marca</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: Porsche"
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary placeholder:text-white/10 focus:border-gold-main/50 focus:outline-none transition-all"
                      value={formData.carBrand}
                      onChange={(e) => setFormData({...formData, carBrand: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Modelo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: 911 GT3"
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary placeholder:text-white/10 focus:border-gold-main/50 focus:outline-none transition-all"
                      value={formData.carModel}
                      onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Porte</label>
                    <select 
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary focus:border-gold-main/50 focus:outline-none transition-all appearance-none"
                      value={formData.carSize}
                      onChange={(e) => setFormData({...formData, carSize: e.target.value})}
                    >
                      <option value="pequeno" className="bg-bg-surface text-text-primary">Pequeno</option>
                      <option value="medio" className="bg-bg-surface text-text-primary">Médio</option>
                      <option value="grande" className="bg-bg-surface text-text-primary">Grande</option>
                      <option value="suv" className="bg-bg-surface text-text-primary">SUV</option>
                      <option value="pickup" className="bg-bg-surface text-text-primary">Pickup</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Data Desejada</label>
                    <div className="relative">
                      <input 
                        required
                        type="date" 
                        className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary focus:border-gold-main/50 focus:outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Horário</label>
                    <input 
                      required
                      type="time" 
                      className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary focus:border-gold-main/50 focus:outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-mono font-bold">Serviço de Interesse</label>
                  <select 
                    required
                    className="w-full bg-white/[0.03] border border-bg-border rounded-lg p-4 text-text-primary focus:border-gold-main/50 focus:outline-none transition-all appearance-none"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                  >
                    <option value="" disabled className="bg-bg-surface text-text-muted">Selecione um serviço</option>
                    {services.map(s => (
                      <option key={s.id} value={s.id} className="bg-bg-surface text-text-primary">{s.nome}</option>
                    ))}
                    {services.length === 0 && (
                      <>
                        <option value="correction" className="bg-bg-surface text-text-primary">Paint Correction</option>
                        <option value="ceramic" className="bg-bg-surface text-text-primary">Ceramic Coating</option>
                      </>
                    )}
                  </select>
                </div>

                <button 
                  disabled={loading}
                  className="w-full py-5 bg-gold-main text-bg-primary font-bold uppercase text-xs tracking-[0.3em] rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 cursor-pointer mt-4"
                >
                  {loading ? 'Processando...' : <>Confirmar Agendamento <Send className="w-3 h-3" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
