# Reflection on Using AI Agents During Development

Working on the FuelEU Maritime full-stack assignment with ChatGPT as my only AI agent helped me understand the real strengths and limitations of AI-assisted development. Throughout the project, I used ChatGPT to generate code, clarify concepts, guide architecture decisions, and debug issues. This experience improved both my learning speed and my confidence in structuring a large, domain-focused application.

## What I Learned Using AI Agents

The main learning was how to communicate with an AI tool clearly and incrementally. I learned to:
- Break tasks into small, understandable prompts.
- Provide full context so the AI can generate correct outputs.
- Review and validate everything instead of trusting the first answer.
- Use AI more for reasoning than copy-pasting code.

AI helped me understand the FuelEU Maritime rules (comparison logic, CB formula, banking, pooling) by explaining them in simple terms. It also reminded me of clean architecture patterns and how to keep business logic inside use-cases rather than controllers.

## Efficiency Gains vs Manual Coding

Using ChatGPT made the project significantly faster.  
The biggest time savings were:
- Generating repetitive files (domain types, ports, repositories, controllers).
- Creating a clean folder structure for hexagonal architecture.
- Writing React components and API wrappers quickly.
- Helping with Prisma schema, seed data, and MySQL queries.

If I had written everything manually, the initial setup alone would have taken several hours. With ChatGPT, I could focus on reviewing and refining instead of typing boilerplate. Even with the need to correct mistakes, the overall efficiency was much higher than manual coding.

At the same time, I learned that AI does not replace understanding. I still needed to check field names, ensure correct TypeScript types, verify formulas, and test endpoints myself. The best speed came from combining AI generation with manual validation.

## Improvements I’d Make Next Time

If I repeated this project, I would improve a few areas:

1. Use smaller iterative prompts 
   Large prompts sometimes produced incomplete or inaccurate outputs. Breaking tasks down into smaller pieces helps the AI stay accurate.

2. Add automated tests earlier
   I wrote tests after the API logic was complete. Writing them earlier would catch errors sooner.

3. Provide example inputs/outputs to the AI
   When asking for complex business logic (especially pooling), giving examples upfront would help the AI avoid mistakes.

4. Spend more time refining UI
   The current UI is clean, but I could improve responsiveness and visuals with more Tailwind patterns.

5. Use AI more for documentation
   It helped, but I could use it even better to quickly create diagrams, summaries, and endpoint descriptions.

Overall, using ChatGPT made the development process faster, more structured, and less stressful. It supported me like a coding partner, while still requiring me to think critically and verify domain logic on my own.

