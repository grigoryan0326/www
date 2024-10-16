import React from "react"
import { Skeleton } from "./Skeleton"
import { User } from "./User"

export const Users = ({ users, isLoading, invites, setInvites, setSuccess }) => {
  const [inputValue, setInputValue] = React.useState("")

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  if (inputValue) {
    users = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.email.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  return (
    <>
      <div className='search'>
        <svg
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
        </svg>
        <input
          type='text'
          placeholder='Найти пользователя...'
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          {users.map((user) => (
            <User
              invites={invites}
              setInvites={setInvites}
              key={user.id}
              user={user}
            />
          ))}
        </ul>
      )}
      <button className='send-invite-btn' onClick={() => {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      }}>Отправить приглашение</button>
    </>
  )
}
