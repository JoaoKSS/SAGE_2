import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';

export default function AppearanceToggleTab({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Claro' },
        { value: 'dark', icon: Moon, label: 'Escuro' },
        { value: 'system', icon: Monitor, label: 'Sistema' },
    ];

    return (
        <div className={cn('inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800', className)} {...props}>
            {tabs.map(({ value, icon: Icon, label }) => (
                <button
                    key={value}
                    onClick={() => updateAppearance(value)}
                    className={cn(
                        'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                        appearance === value
                            ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                            : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                    )}
                >
                    <Icon className={cn(
                        "-ml-1 h-4 w-4 transition-all duration-300",
                        value === 'light' && "text-yellow-500 hover:rotate-12",
                        value === 'dark' && "text-blue-500 hover:-rotate-12", 
                        value === 'system' && "text-gray-500 hover:scale-110",
                        appearance === value && "scale-110"
                    )} 
                    style={{
                        filter: appearance === value 
                            ? value === 'light' 
                                ? 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))'
                                : value === 'dark'
                                ? 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))'
                                : 'drop-shadow(0 0 4px rgba(107, 114, 128, 0.4))'
                            : 'none'
                    }} />
                    <span className="ml-1.5 text-sm">{label}</span>
                </button>
            ))}
        </div>
    );
}
