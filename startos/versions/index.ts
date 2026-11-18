import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_0_4_1_10 } from './v0.4.1_10'
import { v_0_4_1_16 } from './v0.4.1_16'
import { v_0_5_1_beta_1 } from './v0.5.1-beta_1'
import { v_0_5_1_beta_10 } from './v0.5.1-beta_10'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_0_4_1_10, v_0_4_1_16, v_0_5_1_beta_1, v_0_5_1_beta_10],
})
