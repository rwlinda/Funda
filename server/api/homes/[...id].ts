export default async (event:any) => {
  const id = event.context.params.id
  
  const runtimeConfig = useRuntimeConfig()
  const key = runtimeConfig.fundaKeySecret

  const home = await $fetch(
        `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${key}/koop/${id}`
    );

  return home
}