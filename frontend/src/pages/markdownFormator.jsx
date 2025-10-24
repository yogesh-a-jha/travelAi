import 'highlight.js/styles/github.css';

const MarkdownDisplay = ({ content }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10  border border-gray-100">
        {content.split('\n').map((line, index) => {
  // === MAIN TITLE ===
  if (line.startsWith('# ')) {
    return (
      <h1
        key={index}
        className="text-4xl font-extrabold text-indigo-700 mb-6 text-center border-b-4 border-indigo-300 pb-2 drop-shadow-md"
      >
        {line.replace('# ', '')}
      </h1>
    );
  }

  // === DATES ===
  else if (line.toLowerCase().includes('dates:')) {
    return (
      <p
        key={index}
        className="text-lg font-semibold text-indigo-800 bg-indigo-100 inline-block px-3 py-1 rounded-lg mb-4 shadow-sm"
      >
        {line.replace('**', '')}
      </p>
    );
  }

  // === SECTION HEADINGS ===
  else if (line.startsWith('## ')) {
    const isWeather = line.toLowerCase().includes('weather');
    const isBudget = line.toLowerCase().includes('budget');
    const isTips = line.toLowerCase().includes('tips');

    return (
      <h2
        key={index}
        className={`text-2xl font-bold mt-8 mb-4 pl-4 py-2 rounded-md ${
          isWeather
            ? 'bg-sky-100 text-sky-800 border-l-4 border-sky-500'
            : isBudget
            ? 'bg-emerald-100 text-emerald-800 border-l-4 border-emerald-500'
            : isTips
            ? 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-400'
            : 'bg-blue-50 text-blue-700 border-l-4 border-blue-400'
        } shadow-sm`}
      >
        {line.replace('## ', '')}
      </h2>
    );
  }

  // === DAY HEADINGS ===
  else if (/^Day\s\d+/i.test(line)) {
    return (
      <h3
        key={index}
        className="text-2xl font-bold text-amber-700 mt-8 mb-3 bg-amber-50 p-3 rounded-xl border-l-8 border-amber-400 shadow-md"
      >
        {line}
      </h3>
    );
  }

  // === SUBHEADINGS (Morning/Afternoon/Evening/Meal) ===
  else if (
    /^(Morning|Afternoon|Evening|Night)/i.test(line) ||
    line.includes('Breakfast') ||
    line.includes('Lunch') ||
    line.includes('Dinner')
  ) {
    return (
      <h4
        key={index}
        className="text-lg font-semibold text-gray-800 mt-4 mb-2 uppercase tracking-wide border-l-4 border-amber-400 pl-3 bg-amber-50 rounded-md shadow-sm"
      >
        {line.replace('*', '')}
      </h4>
    );
  }

  // === BULLET POINTS ===
  else if (line.startsWith('* ') || line.startsWith('- ')) {
    return (
      <ul key={index} className="list-disc ml-8 text-gray-700 mb-2">
        <li>{line.replace(/^\* |^- /, '')}</li>
      </ul>
    );
  }

  // === COST / BUDGET / CURRENCY ===
  else if (line.match(/₹|\$|Budget|Cost|Price|Estimated/)) {
    return (
      <p
        key={index}
        className="font-medium text-emerald-700 bg-emerald-50 border-l-4 border-emerald-400 p-2 rounded mb-2 shadow-sm"
      >
        {line.replace('**', '')}
      </p>
    );
  }

  // === DATES & TIMES IN TEXT ===
  else if (line.match(/\d{4}-\d{2}-\d{2}/)) {
    return (
      <p
        key={index}
        className="text-indigo-700 font-semibold bg-indigo-50 inline-block px-3 py-1 rounded-md mb-2 shadow-sm"
      >
        {line}
      </p>
    );
  }

  // === REGULAR PARAGRAPHS ===
  else if (line.trim()) {
    return (
      <p key={index} className="text-gray-700 leading-relaxed mb-3">
        {line.replace(/\*\*/g, '')}
      </p>
    );
  }

  return null;
})}


    </div>

  );
};

export default MarkdownDisplay;
