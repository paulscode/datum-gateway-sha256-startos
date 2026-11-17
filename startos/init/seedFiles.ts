import { configJson } from '../fileModels/datum_gateway_config.json'
import { sdk } from '../sdk'

export const seedFiles = sdk.setupOnInit(async (effects) => {
  await configJson.merge(effects, {})
  // Switch the PaulsCode features on where they have never been set: a fresh install, or an
  // update from a package without them. A choice the user has made since is left alone.
  const stratum = await configJson.read((c) => c?.stratum).once()
  const defaults: {
    vardiff_below_pool_min?: boolean
    password_difficulty?: boolean
  } = {}
  if (stratum?.vardiff_below_pool_min === undefined)
    defaults.vardiff_below_pool_min = true
  if (stratum?.password_difficulty === undefined)
    defaults.password_difficulty = true
  if (Object.keys(defaults).length)
    await configJson.merge(effects, { stratum: defaults })
})
