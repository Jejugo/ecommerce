import react, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import statusCodes from '../const/status-codes'

import { EmailTokenContext } from "../context/EmailTokenProvider";

export default function EmailTokenValidation(Component) {
  return () => {

  const { token }  = useContext(EmailTokenContext)
  const router = useRouter();

  useEffect(() => {
    async function getCustomerToken(){
      if(token){
        const res = await fetch(`http://localhost:3002/email/verification/${token}`, {
          method: 'get'
        })
        if(!statusCodes.valid.includes(res.status)) router.push('/login')
      }
    }

    getCustomerToken()

  }, [ token ])

    return <Component {...arguments} />;
  };
}