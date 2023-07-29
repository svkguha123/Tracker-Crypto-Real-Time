import React, { useState } from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';



const List = ({ coin }) => {

  const [added, setAdded] = useState(hasBeenAdded(coin.id));


  return (
    <Link to={`/coin/${coin.id}`}>
      <tr
        // className='list-row'
        className={`list-row ${coin.price_change_percentage_24h < 0 && "list-row-red"
          }`}
      >
        <Tooltip title="Coin Logo" placement='top-start' arrow>
          <td className='td-image'>
            <img src={coin.image} className='coin-logo' />
          </td>
        </Tooltip>

        <Tooltip title="Coin Symbol & Coin Name" placement='top-start' arrow>
          <td>
            <div className='name-col'>
              <p className='coin-symbol'>{coin.symbol}</p>
              <p className='coin-name'>{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Price change percentage 24 hours" placement='top-start' arrow>
          {coin.price_change_percentage_24h > 0 ? (
            <td className='chip-flex'>
              <div className='price-chip'>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='icon-chip td-icon'>
                <TrendingUpRoundedIcon />
              </div>

            </td>
          ) : (
            <td className='chip-flex'>
              <div className='price-chip chip-red'>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>

              <div className='icon-chip icon-red td-icon'>
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>

        <Tooltip title="Current Price" placement='top-start' arrow>
          <td>
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)"
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement='top-start' arrow>
          <td>
            <p className='total-volume td-right-align td-total-volume'>
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement='top-start' arrow>
          <td className='desktop-td-mkt'>
            <p className='market-cap td-right-align'>
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement='top-start' arrow>
          <td className='mobile-td-mkt'>
            <p className='market-cap td-right-align'>
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>

        <td
          style={{ width: "fit-content" }}
        >
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
              />
            )}
          </IconButton>
        </td>

      </tr>
    </Link>
  )
}

export default List;
