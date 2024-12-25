/* eslint-disable react/prop-types */
import Navigation from './navigation';

export default function Layout({children}){
  return (
    <>
      <Navigation/>
      <div>{children}</div>
    </>
  )
}


