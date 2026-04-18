![alt text](image.png)# 🛡️ Nexus.AI - local: Estética Automotiva Premium

Este projeto herda as diretrizes de engenharia de elite do **Nexus.AI Operating System**.

## 🚀 Diretrizes de Comportamento (Karpathy Protocol V5)

**Tradeoff:** Estas diretrizes priorizam a cautela e precisão cirúrgica sobre a velocidade bruta.

### 1. Pense Antes de Codar
- Não assuma nada. Se houver ambiguidade no design ou lógica 3D, pergunte.
- Exponha premissas e tradeoffs (ex: performance vs. qualidade visual no R3F).
- Se a integração do modelo Porsche falhar, pare imediatamente e analise os logs do console.

### 2. Simplicidade Primeiro (Anti-Bloat)
- Escreva o mínimo de código possível. Nada de bibliotecas extras não solicitadas.
- Mantenha os shaders e lógicas de animação do R3F modulares e limpos.

### 3. Mudanças Cirúrgicas
- Altere estritamente o necessário. Cada componente (Hero, Services, Gallery) deve ser independente.
- Não refatore o que não está quebrado. 

### 4. Execução Guiada por Metas
- Transforme tarefas em critérios de sucesso verificáveis.
- Planeje em passos: `[Passo] -> verificar: [comando/preview]`. Loop até verificar sucesso.

## 🛠️ Stack & Arquitetura
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS + Magic UI / Aceternity UI
- **3D Engine:** React Three Fiber + Three.js
- **Backend:** Supabase (Auth/Leads)
- **Visual:** Dark Mode (Background: `#09090b`), Accents (Gold/Metallic Blue)
- **Asset:** `/public/models/free_porsche_911_carrera_4s.glb`

## 📁 Estrutura de Pastas Padrão
- `src/components/ui`: Componentes de alta fidelidade (Magic UI/Aceternity).
- `src/components/sections`: Seções da Landing Page (Hero, Intro, Services, etc).
- `src/components/canvas`: Componentes React Three Fiber.
- `src/hooks`: Hooks personalizados para animações/scroll.
- `src/lib`: Configurações de Supabase e utilitários.

