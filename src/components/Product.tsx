interface Props {
  id: string;
  name: string;
  completed: boolean;
  onRemove: () => void;
  onCheck: () => void;
}