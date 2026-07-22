import type { SubmitAttackRequest } from '../../api/types'

export function validateAttackRequest(
  payload: SubmitAttackRequest,
  authorizedUse: boolean,
): string[] {
  const errors: string[] = []

  if (!payload.objective.trim()) {
    errors.push('Objective is required.')
  } else if (payload.objective.length > 1000) {
    errors.push('Objective must not exceed 1000 characters.')
  }

  if (payload.models.length === 0) {
    errors.push('Select at least one model.')
  }

  if (payload.temperature < 0 || payload.temperature > 2) {
    errors.push('Temperature must be between 0 and 2.')
  }

  if (payload.max_turns < 2 || payload.max_turns > 20) {
    errors.push('Max turns must be between 2 and 20.')
  }

  if (payload.seed !== null && !Number.isInteger(payload.seed)) {
    errors.push('Seed must be an integer.')
  }

  if (!authorizedUse) {
    errors.push('Confirm authorized defensive use before submitting.')
  }

  return errors
}