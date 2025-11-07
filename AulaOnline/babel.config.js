export default function (api) {
   api.cache(true);
   return {
      presets: ["babel-preset-expo"],
      plugins: [
         [
            "module-resolver",
            {
               alias: {
                  // Este alias é o que resolve o seu problema do @/
                  "@/": "./",
                  // Você também pode ser mais específico:
                  // '@/assets': './assets',
               },
            },
         ],
      ],
   };
};
