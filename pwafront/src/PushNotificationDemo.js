import React from "react";
import usePushNotifications from "./usePushNotifications";

const Loading = ({ loading }) => (loading ? <div className="app-loader">Please wait, we are loading something...</div> : null);
const Error = ({ error }) =>
  error ? (
    <section className="app-error">
      <h2>{error.name}</h2>
      <p>Error message : {error.message}</p>
      <p>Error code : {error.code}</p>
    </section>
  ) : null;

export default function Profil() {
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    error,
    loading
  } = usePushNotifications();
  const email = localStorage.getItem("email")
  const isConsentGranted = userConsent === "granted";

  return (
    <main>
      <Loading loading={loading} />
      <h1>Mon Compte : {email}</h1>
      <p>Push notification are {!pushNotificationSupported && "NOT"} supported by your device.</p>
      <Error error={error} />

      <button disabled={!pushNotificationSupported || isConsentGranted} onClick={onClickAskUserPermission}>
        {isConsentGranted ? "Consent granted" : " Ask user permission"}
      </button>

      <button disabled={!pushNotificationSupported || !isConsentGranted || userSubscription} onClick={onClickSusbribeToPushNotification}>
        {userSubscription ? "Push subscription created" : "Create Notification subscription"}
      </button>

      <button disabled={!userSubscription || pushServerSubscriptionId} onClick={onClickSendSubscriptionToPushServer}>
        {pushServerSubscriptionId ? "Subscrption sent to the server" : "Send subscription to push server"}
      </button>

      {pushServerSubscriptionId && (
        <div>
          <p>The server accepted the push subscrption!</p>
        </div>
      )}
      <button onClick={() =>  {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        }}>Deconnexion</button>  
      </main>
  );
}
