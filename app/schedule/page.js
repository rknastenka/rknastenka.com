export default function Schedule() {
  return (
    <div className=" w-full max-w-3xl">
      <h3 className="font-bold mb-4">Goals are good for setting a direction, but systems are best for making progress.</h3>
      
      <table className="w-full max-w-3xl table-auto border-2">
        <tbody>
          <tr>
            <td className="border-2 py-1 text-sm text-center w-24">4:45-5:00</td>
            <td className="border-2 py-1 px-4 text-sm">strech + med + water + fast</td>
          </tr>

          <tr className="border-4">
            <td className="border-4 py-7 text-sm text-center w-24">5:00-7:00</td>
            <td className="border-4 py-7 px-4 text-sm">Outsource Studies</td>
          </tr>

          <tr>
            <td className="border-2 py-1 text-sm text-center w-24">7:00-8:00</td>
            <td className="border-2 py-1 px-4 text-sm">slh + azkr + clth + coffee</td>
          </tr>

          <tr className="border-4">
            <td className="border-4 py-7 text-sm text-center w-24">8:00-10:00</td>
            <td className="border-4 py-7 px-4 text-sm">Collage Studies</td>
          </tr>

          <tr className="border-4">
            <td className="border-4 py-20 text-sm text-center w-24">10:00-3:20</td>
            <td className="border-4 py-20 px-4 text-sm">Week/Month Goal</td>
          </tr>

          <tr>
            <td className="border-2 py-1 text-sm text-center w-24">3:30-4:30</td>
            <td className="border-2 py-1 px-4  text-sm">slh + azkr + lunch</td>
          </tr>

          <tr className="border-4">
            <td className="border-4 py-16 text-sm text-center w-24">4:30-8:00</td>
            <td className="border-4 py-16 px-4 text-sm">Coding Projects</td>
          </tr>

          <tr>
            <td className="border-2 py-1 text-sm text-center w-24">8:00-8:30</td>
            <td className="border-2 py-1 px-4  text-sm">slh + journal + day-reflection + review knowledge + emails/messages </td>
          </tr>

          <tr>
            <td className="border-2 py-1 text-sm text-center w-24">8:30-9:30</td>
            <td className="border-2 py-1 px-4 text-sm">reading non-tech book</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
