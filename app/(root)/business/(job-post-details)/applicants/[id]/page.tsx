import { getRatingsByWorker } from "@/actions/rating";
import { getWorkerById } from "@/actions/worker";
import Contact from "@/app/(root)/business/(job-post-details)/_components/Contact";
import Education from "@/app/(root)/business/(job-post-details)/_components/Education";
import Experience from "@/app/(root)/business/(job-post-details)/_components/Experience";
import Skill from "@/app/(root)/business/(job-post-details)/_components/Skill";
import { Card } from "@/components/ui/card";
import Rating from "../../_components/Rating";

export default async function AppclicantDetailPage({ params }: { params: { id: string } }) {
  const worker: Worker = await getWorkerById(+params.id);
  const ratings = await getRatingsByWorker(worker.id);

  return (
    <Card className="max-w-5xl my-4 mx-auto p-2 space-y-2 ">
      <Contact user={worker.user} />
      <Rating ratings={ratings}/>
      <Experience experiences={worker.experiences} />
      <Education  education={worker.education}/>
      <Skill skills={worker.skills}/>
    </Card>
  );
}
