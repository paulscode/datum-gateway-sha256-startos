import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.1-beta:12',
  releaseNotes: {
    en_US: `Stop, updates and restarts can no longer be held up by a status check that never finishes. A check still unanswered after a minute says so, and no longer keeps the service from stopping.`,
    fr_FR: `Arrêter, mettre à jour ou redémarrer le service ne peut plus être bloqué par une vérification d'état qui ne se termine jamais. Une vérification sans réponse après une minute l'indique, et n'empêche plus l'arrêt du service.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
