import { History } from './history';
import { Workout } from './workout';
export class Set {
  id: string;
  reps: number;
  series: number;
  weight?: number;
  type: Type;
  day: Day;
  userId: string;
  machineId: string;
  exerciseId: string;
  workout?: Workout;
  workoutId?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date | string | null | undefined;
  history?: History[];
}
export type Type = 'BACK' | 'CHEST' | 'LEGS' | 'SHOULDERS' | 'ARMS' | 'ABS';

export type Day =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';
