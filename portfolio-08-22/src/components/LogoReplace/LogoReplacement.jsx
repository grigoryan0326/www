import { GiForkKnifeSpoon } from "react-icons/gi"
import { FaBed, FaCode } from "react-icons/fa"
import { LuRepeat2 } from "react-icons/lu"
import "./LogoReplacement.scss"

const LogoReplacement = () => {
  return (
    <div className='logoWrapper'>
      <ul className='logoItems'>
        <li className='logoItem'>
          <div className='logoItemSvg'>
            <GiForkKnifeSpoon />
          </div>
          <p className='itemText'>
            eat<span className='brackets'>()</span>;
          </p>
        </li>
        <li className='logoItem'>
          <div className='logoItemSvg'>
            <FaBed />
          </div>
          <p className='itemText'>
            sleep<span className='brackets'>()</span>;
          </p>
        </li>
        <li className='logoItem'>
          <div className='logoItemSvg'>
            <FaCode />
          </div>
          <p className='itemText'>
            code<span className='brackets'>()</span>;
          </p>
        </li>
        <li className='logoItem'>
          <div className='logoItemSvg'>
            <LuRepeat2 />
          </div>
          <p className='itemText'>
            repeat<span className='brackets'>()</span>;
          </p>
        </li>
      </ul>
    </div>
  )
}
export default LogoReplacement
