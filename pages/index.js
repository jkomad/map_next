import { useLoadScript } from "@react-google-maps/api";
import Map from "@/components/Map";
import { supabase } from "@/lib/supabase";

export const getServerSideProps = async () => {
  const { data } = await supabase.from("locations").select();
  return {
    props: {
      locations: data,
    },
  };
};

const Home = ({ locations }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map locations={locations} />;
};

export default Home;
