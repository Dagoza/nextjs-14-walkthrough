import '../ui/global.css';
import DashboardSkeleton from '../ui/skeletons';

export default function loading({ children }: { children: React.ReactNode }) {
  return <DashboardSkeleton />;
}
