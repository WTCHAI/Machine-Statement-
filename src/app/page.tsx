import { redirect } from "next/navigation";

type Props = {}

export default function page({}: Props) {
  return redirect('/dashboard') ; 
}