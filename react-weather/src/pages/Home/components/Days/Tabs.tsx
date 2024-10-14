import s from "./Days.module.scss"

type Tab = {
  value: string
}

type Props = {}
const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ]

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab, i: number) => {
          return (
            <div
              className={s.tab}
              key={i}
            >
              {tab.value}
            </div>
          )
        })}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  )
}

export default Tabs
