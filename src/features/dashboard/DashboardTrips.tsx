import BoxTrip from "../../ui/BoxTrip";

export default function DashboardTrips() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-dark-100 text-[20px] my-3">Trips</h2>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(256px,auto))]">
        <BoxTrip
          price={200}
          image="/sample.jpeg"
          title="Thornridge Cir. Shiloh"
          location="St Georges Ln Singapore"
        />
        <BoxTrip
          price={800}
          image="/sample1.jpg"
          title="Thornridge Cir. Shiloh"
          location="St Georges Ln Singapore"
        />
        <BoxTrip
          price={720}
          image="/sample2.jpg"
          title="Thornridge Cir. Shiloh"
          location="St Georges Ln Singapore"
        />
        <BoxTrip
          price={330}
          image="/sample3.jpg"
          title="Thornridge Cir. Shiloh"
          location="St Georges Ln Singapore"
        />
      </div>
    </div>
  );
}
