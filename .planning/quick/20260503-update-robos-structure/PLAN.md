# Plan: Update Robôs de Atendimento Structure

Match the "Robôs de Atendimento" service page structure to the "Sites que Vendem" high-conversion layout.

## Steps

1. **Create Component**: Create `src/pages/RobosDeAtendimento.tsx` by cloning the structure of `src/pages/SitesQueVendem.tsx`.
2. **Populate Content**:
    - Update hero section with the provided subtitle.
    - Implement 3 plans: "Robô Porteiro", "Robô Organizador", "Super Robô".
    - Implement monthly plan: "Seguro Digital".
    - Implement addons: "Robô em Todo Lugar", "Sua Marca Bonita", "API Oficial".
    - Implement trust points: "Foco no seu Lucro", "Entrega Rápida", "Resolução Analítica", "Você é o Dono".
    - Update tech stack.
3. **Route Integration**: Update `src/pages/ServiceDetail.tsx` to return the new `RobosDeAtendimento` component when the slug is `robos-de-atendimento`.
4. **Validation**: Verify that the new page renders correctly and the links work.

## Verification Criteria
- [ ] `/servico/robos-de-atendimento` uses the new layout.
- [ ] All 3 pricing plans are visible with correct prices.
- [ ] Monthly plan "Seguro Digital" is displayed.
- [ ] Addons are listed correctly.
- [ ] Tech stack includes the specific tools mentioned (n8n, LiteLLM, etc.).
- [ ] WhatsApp CTA buttons have the correct `source` and `message` properties.
