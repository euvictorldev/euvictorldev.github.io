# PLAN: Adicionar Seção de Conhecimento (Livros & Cursos)

## Objetivo
Adicionar uma seção premium para exibir Livros lidos e Certificados/Cursos realizados, lado a lado.

## Onde Adicionar?
- **Arquivo**: `src/components/sections/Knowledge.tsx`
- **Posição**: Entre `About.tsx` (Sobre) e `FAQ.tsx`.
- **Estética**: Fundo `Black` (para contrastar com o `Emerald Deep` do Sobre) com elementos `liquid-glass`.

## Estrutura da Seção
1. **Título**: "Expandindo Horizontes" ou "Conhecimento & Evolução".
2. **Layout**: Duas colunas (Grid).
   - **Esquerda (Livros)**: Lista de livros com ícones de livros ou capas minimalistas.
   - **Direita (Certificados)**: Lista de cursos e certificações com badges.
3. **Interatividade**: Hover effects para destacar cada item.

## Passos
1. Criar `src/components/sections/Knowledge.tsx`.
2. Adicionar dados mockados de livros e certificados.
3. Implementar o componente com Tailwind e animações `framer-motion` (se disponível) ou CSS standard.
4. Importar e registrar no `src/pages/Index.tsx`.
5. Ajustar os `ShapeDivider` se necessário.

## Verificação
- Responsividade (Stack em mobile, Grid em desktop).
- Harmonia visual com o restante do portfólio.
