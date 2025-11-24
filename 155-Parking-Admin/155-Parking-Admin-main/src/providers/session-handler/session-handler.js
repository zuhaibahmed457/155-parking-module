import { getAnonymousToken } from "@/hooks/getToken";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SessionHandler = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getAnonymousToken(dispatch, router);
  }, []);

  return null;
};

export default SessionHandler;
