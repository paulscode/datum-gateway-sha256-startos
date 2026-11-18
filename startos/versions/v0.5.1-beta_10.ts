import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_0_5_1_beta_10 = VersionInfo.of({
  version: '0.5.1-beta:10',
  releaseNotes: {
    en_US: `PaulsCode's build of Datum Gateway for SHA256, a drop-in replacement for the official package.

- Rented rigs keep their own difficulty. With "Serve miners below the pool's minimum difficulty" (on by default), each miner gets a difficulty that suits its hashrate even when the pool's minimum is far higher. Work is still committed at the pool's minimum and only shares meeting it are sent to the pool, so pool credit is unchanged.
- Miners can request a difficulty in the Stratum password (d=N), also on by default. Pickhash uses it to give each rented rig the difficulty MiningRigRentals expects.
- Vardiff measures at the difficulty it actually serves, which stops large overshoots after a step up.
- A connection that opens with a TLS handshake is closed at once, so MiningRigRentals' pool test no longer reports a working endpoint as failing.
- Answers datum.capabilities, so tools such as Pickhash can tell what this gateway supports.

Both new settings are under Actions → Stratum Server Settings.`,
    fr_FR: `Version PaulsCode de Datum Gateway pour SHA256, remplaçant direct du paquet officiel.

- Les machines louées gardent leur propre difficulté (« Servir les mineurs sous la difficulté minimale du pool », activé par défaut). Le travail reste engagé au minimum du pool et seules les parts qui l'atteignent lui sont envoyées : le crédit du pool est inchangé.
- Les mineurs peuvent demander une difficulté dans le mot de passe Stratum (d=N), activé par défaut.
- Le vardiff mesure à la difficulté réellement servie.
- Une connexion qui commence par une poignée de main TLS est fermée aussitôt.
- Répond à datum.capabilities.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
