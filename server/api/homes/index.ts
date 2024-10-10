export default defineEventHandler(async e => {
  
  const runtimeConfig = useRuntimeConfig()
  const key = runtimeConfig.NUXT_FUNDA_KEY_SECRET
  const homeObjects = await fetch(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/${key}/?type=koop`)

  const data = await homeObjects.json()

  return data
}) 