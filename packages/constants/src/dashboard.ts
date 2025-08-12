// types
import { TIssuesListTypes } from "@plane/types";

export enum EDurationFilters {
  NONE = "none",
  TODAY = "today",
  THIS_WEEK = "this_week",
  THIS_MONTH = "this_month",
  THIS_YEAR = "this_year",
  CUSTOM = "custom",
}

// filter duration options
export const DURATION_FILTER_OPTIONS: {
  key: EDurationFilters;
  label: string;
}[] = [
  {
    key: EDurationFilters.NONE,
    label: "Todo o tempo",
  },
  {
    key: EDurationFilters.TODAY,
    label: "Vencido hoje",
  },
  {
    key: EDurationFilters.THIS_WEEK,
    label: "Vencido esta semana",
  },
  {
    key: EDurationFilters.THIS_MONTH,
    label: "Vencido este mês",
  },
  {
    key: EDurationFilters.THIS_YEAR,
    label: "Vencido este ano",
  },
  {
    key: EDurationFilters.CUSTOM,
    label: "Personalizado",
  },
];

// random background colors for project cards
export const PROJECT_BACKGROUND_COLORS = [
  "bg-gray-500/20",
  "bg-green-500/20",
  "bg-red-500/20",
  "bg-orange-500/20",
  "bg-blue-500/20",
  "bg-yellow-500/20",
  "bg-pink-500/20",
  "bg-purple-500/20",
];

// assigned and created issues widgets tabs list
export const FILTERED_ISSUES_TABS_LIST: {
  key: TIssuesListTypes;
  label: string;
}[] = [
  {
    key: "upcoming",
    label: "Próximos",
  },
  {
    key: "overdue",
    label: "Vencido",
  },
  {
    key: "completed",
    label: "Concluído",
  },
];

// assigned and created issues widgets tabs list
export const UNFILTERED_ISSUES_TABS_LIST: {
  key: TIssuesListTypes;
  label: string;
}[] = [
  {
    key: "pending",
    label: "Pendente",
  },
  {
    key: "completed",
    label: "Concluído",
  },
];

export type TLinkOptions = {
  userId: string | undefined;
};
