import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-2.5rem)]">
      <Grid
        height="80"
        width="80"
        color="red"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
