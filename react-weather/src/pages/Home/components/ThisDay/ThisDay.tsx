import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector"
import s from "./ThisDay.module.scss"

type Props = {}
const ThisDay = (props: Props) => {
  return (
    <header className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_content}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время։ <span>21:21</span>
        </div>
        <div className={s.this__city}>Saint Petersbourg</div>
      </div>
    </header>
  )
}

export default ThisDay
