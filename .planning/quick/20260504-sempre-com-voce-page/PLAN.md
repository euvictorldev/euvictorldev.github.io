# Plan: Create Sempre Com Voce Dedicated Page

The objective is to create a dedicated page for the "Sempre com Você" service, following the structure and design of `SegurancaTotal.tsx`, using the content provided by the user.

## Proposed Structure

1. **Hero**: Title "Sempre com Você" with the provided subtitle.
2. **Pricing Cards**: Three tiers (adapted from text):
    - **Plano Web**: R$ 189,90/mês. Focused on sites.
    - **Plano Bot**: R$ 189,90/mês. Focused on robots.
    - **Plano Combo**: (Adapted) R$ 349,90/mês. Both site and bot.
3. **Featured Monthly Benefit**: "Crédito de 2 Horas" highlighted as a special perk.
4. **Addons**: (Adapted) Extra hours, dedicated server management, etc.
5. **Why Choose Me**: Based on "Por que vale a pena assinar?" and "Por que sou a melhor escolha?".
6. **Requirements**: "Acesso ao Sistema".
7. **Tech Stack**: UptimeRobot, Cloudflare, etc.

## Steps

1. Create `src/pages/SempreComVoce.tsx` by copying and adapting `src/pages/SegurancaTotal.tsx`.
2. Map the user-provided text to the component's data structures.
3. Update `src/pages/ServiceDetail.tsx` to include the new page.
4. Verify the implementation.

## Verification
- Page `/servico/sempre-com-voce` renders with the new structure.
- Content matches the user's provided text.
- Layout remains consistent with `SegurancaTotal`.
