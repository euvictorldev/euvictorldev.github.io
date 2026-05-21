---
status: complete
date: 2026-05-04
---

# Resumo: Adição da Seção de Conhecimento

## O que foi feito
- Criada a nova seção `Knowledge.tsx` em `src/components/sections/`.
- Implementado layout "side-by-side" (Livros vs. Certificados) com cards premium `liquid-glass`.
- Adicionados dados mockados para Livros (Clean Code, Pragmatic Programmer, etc.) e Certificados (AWS, Rocketseat, etc.), prontos para personalização.
- Integrada a seção no `src/pages/Index.tsx` com um `ShapeDivider` para transição suave do verde esmeralda para o preto profundo.
- Corrigida a numeração das seções no arquivo `Index.tsx`.

## Detalhes Técnicos
- **Layout**: Grid responsivo (1 col em mobile, 2 cols em desktop).
- **Estilo**: Uso de gradientes sutis, badges de status e ícones da `lucide-react`.
- **Animações**: Mantido o padrão `animate-fade-rise` para consistência visual.

## Próximos Passos
- O usuário pode agora editar os arrays `books` e `certificates` em `src/components/sections/Knowledge.tsx` com seus próprios títulos e links.
