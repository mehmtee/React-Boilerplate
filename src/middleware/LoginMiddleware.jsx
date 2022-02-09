import {useEffect,useState} from 'react'

const LoginMiddleware = ({setNext,setLoading}) => {

  const login = () => {
    setLoading(true);
    /* Some Actions*/
    setTimeout(() => {
      setNext(false)
      setLoading(false);
    },1000)
  }

  useEffect(() => {
    login()
  },[])


  
  
}

export default LoginMiddleware