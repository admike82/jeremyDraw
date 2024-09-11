import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.tw.css";
import OnLineLayout from "./component/Layout/OnLineLayout";
import useDocumentTitle from "./hooks/useDocumentTitle";
import { tradFR } from "./Tools/Calendar/tradFr";

type view = "day" | "week" | "work_week" | "month" | "agenda";

interface event {
  start: Date;
  end: Date;
  title: string;
}

type events = event[];

interface SlotInfo {
  start: Date;
  end: Date;
  slots: Date[];
  action: "select" | "click" | "doubleClick";
  /** For "TimeGrid" views */
  resourceId?: number | string | undefined;
  /** For "select" action */
  bounds?:
    | {
        x: number;
        y: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
      }
    | undefined;
  /** For "click" or "doubleClick" actions */
  box?:
    | {
        x: number;
        y: number;
        clientX: number;
        clientY: number;
      }
    | undefined;
}

function App() {
  useDocumentTitle("Go-up - Planning");
  const _VIEWS: view[] = ["month", "work_week"];
  const [view, setView] = useState<view>("work_week");
  const [eventlist, setEventlist] = useState<events>([]);
  const [dateValidate, setDateValidate] = useState([
    "09/09/2024",
    "10/09/2024",
    "13/09/2024",
  ]);
  tradFR(moment);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    setDateValidate(["09/09/2024", "10/09/2024", "13/09/2024"]);
    setEventlist([]);
  }, []);

  const messages = {
    allDay: "journée",
    previous: "<",
    next: ">",
    today: "aujourd'hui",
    month: "mois",
    week: "semaine",
    work_week: "semaine",
    day: "journée",
    agenda: "Agenda",
    date: "date",
    time: "heure",
    event: "événement",
    noEventsInRange: "Pas d'évènements sur la période",
    showMore: (total: number) => `+ ${total} événement(s) supplémentaire(s)`,
  };

  const onView = (prop: view) => {
    setView(prop);
    // if (view === "day" && promo !== null) {
    //   filtrePromoEvents(eventlist);
    // }
    // if (view === "day" && formateur !== null) {
    //   filtreFormteurEvent(eventlist);
    // }
    // if (prop === "day") {
    //   fullEvents(eventlist);
    // }
  };

  const dayProps = (date: Date) => {
    if (dateValidate.some((d) => d === date.toLocaleDateString())) {
      return {
        style: {
          background: "white",
        },
        onclick: () => {
          window.alert("Cliquez");
        },
      };
    }
    return {
      style: {
        background: "#dddddd",
      },
    };
  };
  const selectSlot = (range: SlotInfo) => {
    if (dateValidate.some((d) => d === range.start.toLocaleDateString())) {
      console.log("Valide");
      return true;
    }
    console.log("non valide");
    return false;
  };

  return (
    <OnLineLayout className="min-h-screen">
      <Calendar
        localizer={localizer}
        selectable={true}
        onSelectSlot={selectSlot}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 18, 0, 0)}
        onView={onView}
        views={_VIEWS}
        view={view}
        dayPropGetter={dayProps}
        step={45}
        messages={messages}
        culture="fr-FR"
        events={eventlist}
        startAccessor="start"
        endAccessor="end"
        style={view === "month" ? { minHeight: "800px" } : {}}
      />
    </OnLineLayout>
  );
}

export default App;
