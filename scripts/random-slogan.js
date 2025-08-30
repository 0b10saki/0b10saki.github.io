hexo.extend.injector.register('head_end', () => {
  const config = hexo.theme.config.index?.slogan || {};
  const slogans = config.random_texts || [];
  const defaultText = config.text || "";

  return `
    <script>
      window.FLUID_RANDOM_SLOGANS = ${JSON.stringify(slogans)};
      window.FLUID_DEFAULT_SLOGAN = ${JSON.stringify(defaultText)};
    </script>
  `;
}, 'default');
