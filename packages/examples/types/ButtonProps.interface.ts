// Doesn't support quoted properties just yet
type EventHandlers = () => void

export default interface ButtonProps {
  [key: string]: string | number | void | EventHandlers
  'data-testid'?: string;
  onClick(): void;
}