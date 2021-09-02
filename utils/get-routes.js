export default async () => {
  const { $content } = require('@nuxt/content')
  const insights = await $content('insights').where({ isLive: true }).fetch()
  insights.map(insight => insight.path === '/index' ? '/' : insight.path)
  const newsletters = await $content('newsletters').where({ isLive: true }).fetch()
  newsletters.map(newsletter => newsletter.path === '/index' ? '/' : newsletter.path)
  const bios = await $content('bios').where({ isLive: true }).fetch()
  bios.map(bio => bio.path === '/index' ? '/' : bio.path)
  return [ insights, newsletters, bios ]
}
