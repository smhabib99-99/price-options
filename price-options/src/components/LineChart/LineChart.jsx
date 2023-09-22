import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarks = [
        {
          "id": 1,
          "name": "Alice",
          "mathMarks": 85,
          "physicsMarks": 90,
          "chemistryMarks": 78
        },
        {
          "id": 2,
          "name": "Bob",
          "mathMarks": 78,
          "physicsMarks": 85,
          "chemistryMarks": 92
        },
        {
          "id": 3,
          "name": "Charlie",
          "mathMarks": 92,
          "physicsMarks": 88,
          "chemistryMarks": 76
        },
        {
          "id": 4,
          "name": "David",
          "mathMarks": 68,
          "physicsMarks": 72,
          "chemistryMarks": 84
        },
        {
          "id": 5,
          "name": "Eve",
          "mathMarks": 75,
          "physicsMarks": 80,
          "chemistryMarks": 90
        },
        {
          "id": 6,
          "name": "Frank",
          "mathMarks": 88,
          "physicsMarks": 92,
          "chemistryMarks": 88
        },
        {
          "id": 7,
          "name": "Grace",
          "mathMarks": 96,
          "physicsMarks": 95,
          "chemistryMarks": 94
        },
        {
          "id": 8,
          "name": "Hannah",
          "mathMarks": 72,
          "physicsMarks": 78,
          "chemistryMarks": 76
        },
        {
          "id": 9,
          "name": "Ivy",
          "mathMarks": 90,
          "physicsMarks": 85,
          "chemistryMarks": 92
        },
        {
          "id": 10,
          "name": "Jack",
          "mathMarks": 82,
          "physicsMarks": 86,
          "chemistryMarks": 80
        }
      ]
      


    return (
        <div>
            <LChart width={1200} height={500} data={subjectMarks} >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke= 'yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;