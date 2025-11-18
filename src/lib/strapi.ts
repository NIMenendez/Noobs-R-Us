export const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL;


export async function fetchDrivers() {
  try {
    const res = await fetch(`${strapiUrl}/api/drivers?populate=*`);
    console.log("Status:", res.status);
    return (await res.json()).data;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    throw err;
  }
}

export async function fetchAnnouncement() {
  try {
    const res = await fetch(`${strapiUrl}/api/announcement`);
    return (await res.json()).data;
  } catch (err) {
    throw err;
  }
}
