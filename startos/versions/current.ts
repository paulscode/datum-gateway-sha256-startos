import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.1-beta:11',
  releaseNotes: {
    en_US: `Fixes from independent reviews of the gateway changes.

- A block found in a quickdiff share for an earlier job is now submitted before the share is refused. Before, such a share was refused first, so a block in it could be lost.
- A second quickdiff on the same job no longer resends identical work. With the commitment held at the pool's minimum it would repeat the first one exactly, and the rig's resubmitted shares came back as duplicates. Now only the new difficulty is sent.
- A quickdiff share for another job is answered as unknown work, rather than as a hashing error that reads like a hardware fault.
- Fixed a misaligned memory read in the duplicate-share check.`,
    fr_FR: `Corrections issues de revues indépendantes.

- Un bloc trouvé dans une part quickdiff d'une tâche précédente est maintenant soumis avant que la part ne soit refusée.
- Un second quickdiff sur la même tâche ne renvoie plus un travail identique : seule la nouvelle difficulté est envoyée.
- Une part quickdiff pour une autre tâche reçoit la réponse « travail inconnu » plutôt qu'une erreur de hachage.
- Correction d'une lecture mémoire mal alignée dans la détection des parts en double.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
