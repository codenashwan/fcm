import Image from "next/image";
import axios from "axios";
import { useState } from "react";
export default function Welcome() {
  const [fcmToken, setFcmToken] = useState("");
  const [userToken, setUserToken] = useState("");
  const [name, setName] = useState();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  function sendNotification() {
    if (!name || !body || !fcmToken || !userToken) {
      alert("Please fill all the fields");
    } else {
      setLoading(true);
      setSuccess(false);
      const url = "https://fcm.googleapis.com/fcm/send";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + fcmToken,
        },
      };
      const target_data = {
        to: userToken,
        notification: {
          title: name,
          body: body,
        },
      };
      axios
        .post(url, target_data, config)
        .then((response) => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div>
      <div className="relative w-[100px] h-[100px]">
        <Image
          src="/img/logo.png"
          alt="Logo"
          layout="fill"
          className="rounded-xl object-top object-cover md:object-contain"
        />
      </div>
      <h1 className="text-5xl text-white font-black mb-3 mt-5">
        Welcome To Firebase FCM API
      </h1>
      <p className="text-xl text-white">
        This is a simple API to send push notifications to your mobile devices
      </p>
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-col gap-2">
          <p className="text-yellow-300 font-black text-lg">FCM TOKEN</p>
          <input
            type="text"
            placeholder="FCM Token"
            className="p-4 rounded-md w-full"
            value={fcmToken}
            onChange={(e) => setFcmToken(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-yellow-300 font-black text-lg">USER TOKEN</p>
          <input
            type="text"
            placeholder="User Token"
            className="p-4 rounded-md w-full"
            value={userToken}
            onChange={(e) => setUserToken(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-yellow-300 font-black text-lg">APP NAME</p>
          <input
            type="text"
            placeholder="App Name"
            className="p-4 rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-yellow-300 font-black text-lg">BODY</p>
          <textarea
            cols="30"
            rows="5"
            className="p-4 rounded-md w-full"
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {loading ? (
          <button className="text-black bg-yellow-300 p-3 w-max font-black rounded-md">
            Sending...
          </button>
        ) : (
          <button
            className="text-black bg-yellow-300 p-3 w-max font-black rounded-md"
            onClick={sendNotification}
          >
            Send Notification
          </button>
        )}
        {success && (
          <p className="text-green-400 font-bold text-lg">Notification Sent</p>
        )}
      </div>
    </div>
  );
}
