import type {
  DailyCheckin,
  Gad7Response,
  HomeworkItem,
  Patient,
  ThoughtRecord,
} from "./types";

/**
 * Статические моковые данные трёх пациентов. Никакого бэкенда —
 * это единственный источник данных в прототипе.
 */

export const PATIENTS: Patient[] = [
  {
    id: "marina",
    displayName: "Марина К.",
    age: 34,
    focus: "Генерализованная тревога, рабочий контекст",
    weekOfCourse: 6,
    totalWeeks: 16,
    nextSession: "2026-08-19T18:00:00+03:00",
    recordsTotal: 27,
  },
  {
    id: "artem",
    displayName: "Артём Д.",
    age: 28,
    focus: "Социальная тревога",
    weekOfCourse: 4,
    totalWeeks: 12,
    nextSession: "2026-08-20T17:30:00+03:00",
    recordsTotal: 11,
  },
  {
    id: "olga",
    displayName: "Ольга П.",
    age: 41,
    focus: "Тревога о здоровье",
    weekOfCourse: 9,
    totalWeeks: 20,
    nextSession: "2026-08-18T16:00:00+03:00",
    recordsTotal: 224,
  },
];

// ---------------------------------------------------------------------------
// Ежедневные отметки тревоги (текущая неделя, 11–17 августа 2026)
// ---------------------------------------------------------------------------

export const DAILY_CHECKINS: DailyCheckin[] = [
  // Марина — 6 из 7 дней, 13 августа пропущена
  { patientId: "marina", date: "2026-08-11", anxiety: 56 },
  { patientId: "marina", date: "2026-08-12", anxiety: 49 },
  { patientId: "marina", date: "2026-08-13", anxiety: 52 },
  { patientId: "marina", date: "2026-08-14", anxiety: null },
  { patientId: "marina", date: "2026-08-15", anxiety: 45 },
  { patientId: "marina", date: "2026-08-16", anxiety: 40 },
  { patientId: "marina", date: "2026-08-17", anxiety: 38 },

  // Артём — ноль отметок на этой неделе
  { patientId: "artem", date: "2026-08-11", anxiety: null },
  { patientId: "artem", date: "2026-08-12", anxiety: null },
  { patientId: "artem", date: "2026-08-13", anxiety: null },
  { patientId: "artem", date: "2026-08-14", anxiety: null },
  { patientId: "artem", date: "2026-08-15", anxiety: null },
  { patientId: "artem", date: "2026-08-16", anxiety: null },
  { patientId: "artem", date: "2026-08-17", anxiety: null },

  // Ольга — каждый день, 78–88
  { patientId: "olga", date: "2026-08-11", anxiety: 82 },
  { patientId: "olga", date: "2026-08-12", anxiety: 85 },
  { patientId: "olga", date: "2026-08-13", anxiety: 79 },
  { patientId: "olga", date: "2026-08-14", anxiety: 88 },
  { patientId: "olga", date: "2026-08-15", anxiety: 81 },
  { patientId: "olga", date: "2026-08-16", anxiety: 84 },
  { patientId: "olga", date: "2026-08-17", anxiety: 80 },
];

// ---------------------------------------------------------------------------
// GAD-7 по неделям курса
// ---------------------------------------------------------------------------

export const GAD7_RESPONSES: Gad7Response[] = [
  { patientId: "marina", weekOfCourse: 2, total: 15 },
  { patientId: "marina", weekOfCourse: 3, total: 14 },
  { patientId: "marina", weekOfCourse: 4, total: 12 },
  { patientId: "marina", weekOfCourse: 5, total: 11 },
  { patientId: "marina", weekOfCourse: 6, total: 9 },

  { patientId: "artem", weekOfCourse: 1, total: 13 },
  { patientId: "artem", weekOfCourse: 2, total: 12 },
  { patientId: "artem", weekOfCourse: 3, total: 12 },
  { patientId: "artem", weekOfCourse: 4, total: null },

  { patientId: "olga", weekOfCourse: 5, total: 16 },
  { patientId: "olga", weekOfCourse: 6, total: 17 },
  { patientId: "olga", weekOfCourse: 7, total: 16 },
  { patientId: "olga", weekOfCourse: 8, total: 17 },
  { patientId: "olga", weekOfCourse: 9, total: 16 },
];

// ---------------------------------------------------------------------------
// Домашние задания
// ---------------------------------------------------------------------------

export const HOMEWORK_ITEMS: HomeworkItem[] = [
  {
    patientId: "marina",
    title: "Дневник мыслей — одна запись в день",
    progressLabel: "6 из 7 дней на этой неделе",
  },
  {
    patientId: "marina",
    title: "Пауза перед ответом на тревожные письма",
    progressLabel: "отмечено 4 раза на этой неделе",
  },

  {
    patientId: "artem",
    title: "Дневник мыслей — одна запись в день",
    progressLabel: "0 из 7 дней на этой неделе",
  },
  {
    patientId: "artem",
    title: "Экспозиция: один короткий разговор в день",
    progressLabel: "не отмечено на этой неделе",
  },

  {
    patientId: "olga",
    title: "Дневник мыслей при проверке симптомов",
    progressLabel: "31 запись за 7 дней",
  },
  {
    patientId: "olga",
    title: "Ограничение проверок симптомов до 2 раз в день",
    progressLabel: "не отмечено на этой неделе",
  },
];

// ---------------------------------------------------------------------------
// Thought records — Марина К.
// ---------------------------------------------------------------------------

const MARINA_RECORDS: ThoughtRecord[] = [
  {
    id: "marina-1",
    patientId: "marina",
    createdAt: "2026-08-11T09:20:00+03:00",
    situation:
      "Понедельник, летучка в 9:00. Руководитель попросил прислать отчёт по проекту к обеду, я ещё не начинала его собирать.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 70 },
      { label: "Тревога", phase: "after", intensity: 45 },
    ],
    automaticThought: "Я не успею, все увидят, что я не справляюсь.",
    evidenceFor:
      "Отчёт большой, часть данных нужно запросить у коллег, а они отвечают не сразу.",
    evidenceAgainst:
      "Раньше я всегда успевала сдать отчёты в срок, даже когда казалось, что не успею. У меня есть шаблон с прошлого раза, это ускорит работу.",
    balancedThought:
      "Будет тяжело, но у меня есть опыт и заготовки. Если не успею полностью — предупрежу заранее, это не катастрофа.",
    distortions: ["Катастрофизация", "Предсказание будущего"],
  },
  {
    id: "marina-2",
    patientId: "marina",
    createdAt: "2026-08-12T08:45:00+03:00",
    situation:
      "Открыла почту утром, там письмо от руководителя с пометкой «срочно», тема не указана.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 65 },
      { label: "Тревога", phase: "after", intensity: 30 },
    ],
    automaticThought: "Наверное, я что-то сделала не так, сейчас будет разнос.",
    evidenceFor: "Он редко пишет «срочно» по мелочам.",
    evidenceAgainst:
      "В прошлые разы «срочно» означало просто вопрос по срокам, а не претензию. Я не помню, чтобы за последнюю неделю накосячила с чем-то заметным.",
    balancedThought:
      "Скорее всего, это рабочий вопрос, а не про меня лично. Открою и увижу.",
    distortions: [],
  },
  {
    id: "marina-3",
    patientId: "marina",
    createdAt: "2026-08-13T19:10:00+03:00",
    situation:
      "Вечером вспомнила, что на встрече днём предложила идею, и после этого повисла пауза, никто сразу не отреагировал.",
    moods: [
      { label: "Стыд", phase: "before", intensity: 60 },
      { label: "Стыд", phase: "after", intensity: 35 },
    ],
    automaticThought:
      "Идея была глупая, коллеги подумали, что я не разбираюсь в теме.",
    evidenceFor: "Никто сразу не поддержал.",
    evidenceAgainst:
      "Через пару минут двое коллег вернулись к идее и обсуждали детали. Пауза бывает и потому что люди обдумывают, не значит отказ.",
    balancedThought:
      "Пауза не равна провалу. Идею в итоге обсуждали, значит она не была нелепой.",
    distortions: ["Чтение мыслей", "Эмоциональное обоснование"],
  },
  {
    id: "marina-4",
    patientId: "marina",
    createdAt: "2026-08-15T09:05:00+03:00",
    situation:
      "Пятница, увидела в календаре встречу один-на-один с руководителем в понедельник, тема не указана.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 68 },
      { label: "Тревога", phase: "after", intensity: 40 },
    ],
    automaticThought: "Меня будут отчитывать за квартал.",
    evidenceFor:
      "В последний раз такая встреча без темы была перед предупреждением коллеге.",
    evidenceAgainst:
      "У нас плановые встречи раз в две недели, эта могла просто выпасть на понедельник по графику. За квартал не было прямой критики от руководителя.",
    balancedThought:
      "Скорее всего, это обычная плановая встреча. Даже если будет обратная связь — это не обязательно негативная.",
    distortions: [],
  },
  {
    id: "marina-5",
    patientId: "marina",
    createdAt: "2026-08-16T20:30:00+03:00",
    situation:
      "Весь день откладывала звонок клиенту, на который нужно было сообщить о переносе сроков.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 74 },
      { label: "Тревога", phase: "after", intensity: 50 },
    ],
    automaticThought: "Клиент разозлится и откажется от сотрудничества.",
    evidenceFor:
      "Сроки для него важны, он уже один раз спрашивал про дедлайн.",
    evidenceAgainst:
      "Раньше при переносе сроков клиенты в основном спокойно реагировали, если объяснить причину заранее. У меня есть аргументированное объяснение переноса.",
    balancedThought:
      "Разговор может быть неприятным, но не факт, что закончится потерей клиента. Лучше позвонить, чем тянуть.",
    distortions: ["Катастрофизация"],
  },
  {
    id: "marina-6",
    patientId: "marina",
    createdAt: "2026-08-17T09:40:00+03:00",
    situation:
      "Итоговая летучка по проекту, нужно подвести промежуточные итоги перед командой.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 62 },
      { label: "Тревога", phase: "after", intensity: 42 },
    ],
    automaticThought: "Я забуду важные цифры, и будет неловко перед всеми.",
    evidenceFor:
      "Раньше на похожей встрече я забыла одну цифру и пришлось уточнять потом.",
    evidenceAgainst:
      "У меня есть подготовленный документ с цифрами, можно свериться. Один раз забыть цифру — не провал, никто это не запомнил надолго.",
    balancedThought:
      "Я подготовилась, и даже если что-то забуду, смогу свериться с документом.",
    distortions: ["Сверхобобщение"],
  },
];

// ---------------------------------------------------------------------------
// Thought records — Артём Д.
// ---------------------------------------------------------------------------

const ARTEM_RECORDS: ThoughtRecord[] = [
  {
    id: "artem-1",
    patientId: "artem",
    createdAt: "2026-07-21T10:00:00+03:00",
    situation:
      "Утренний созвон команды, нужно было рассказать о статусе своей задачи. Говорил и заметил, что голос дрожит.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 72 },
      { label: "Тревога", phase: "after", intensity: 50 },
    ],
    automaticThought:
      "Все услышали, что голос дрожит, и подумали, что я не уверен в себе.",
    evidenceFor: "Голос правда дрожал первые секунды.",
    evidenceAgainst:
      "Никто не переспрашивал и не комментировал. После меня обсуждение спокойно пошло дальше.",
    balancedThought:
      "Дрожь в голосе была почти незаметна для других, а для меня самого — заметна, и это нормально.",
    distortions: ["Чтение мыслей"],
  },
  {
    id: "artem-2",
    patientId: "artem",
    createdAt: "2026-07-22T13:15:00+03:00",
    situation:
      "Коллеги позвали вместе пообедать, сидел за столом и почти не участвовал в разговоре.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 58 },
      { label: "Тревога", phase: "after", intensity: 40 },
      { label: "Стыд", phase: "before", intensity: 55 },
      { label: "Стыд", phase: "after", intensity: 38 },
    ],
    automaticThought: "Я скучный, им неинтересно, что я рядом.",
    evidenceFor: "Я почти ничего не сказал за обед.",
    evidenceAgainst:
      "Меня всё равно позвали, хотя и в прошлый раз я мало говорил. Двое коллег обращались ко мне с вопросами.",
    balancedThought:
      "Я могу мало говорить и всё равно быть желанным в компании — это не одно и то же.",
    distortions: [],
  },
  {
    id: "artem-3",
    patientId: "artem",
    createdAt: "2026-07-23T16:40:00+03:00",
    situation:
      "Написал сообщение в общий чат с вопросом по задаче, никто не ответил больше часа.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 63 },
      { label: "Тревога", phase: "after", intensity: 42 },
    ],
    automaticThought: "Наверное, вопрос был глупый, поэтому все молчат.",
    evidenceFor: "Ответа долго не было.",
    evidenceAgainst:
      "Пятница, вечер, многие уже не online. Через час коллега ответил нормально, без насмешки.",
    balancedThought:
      "Задержка с ответом — про занятость людей, не про качество моего вопроса.",
    distortions: ["Персонализация"],
  },
  {
    id: "artem-4",
    patientId: "artem",
    createdAt: "2026-07-25T09:30:00+03:00",
    situation:
      "Понедельник, планёрка, нужно было первым высказать своё мнение по спорному вопросу.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 75 },
      { label: "Тревога", phase: "after", intensity: 55 },
    ],
    automaticThought: "Если скажу не то, надо мной будут смеяться.",
    evidenceFor:
      "На прошлой планёрке кто-то один раз пошутил над чужим предложением.",
    evidenceAgainst:
      "Шутка была дружелюбная, и после неё продолжили работать над идеей. Обычно предложения просто обсуждают по делу.",
    balancedThought: "Скорее всего, отреагируют на суть, а не будут высмеивать.",
    distortions: [],
  },
  {
    id: "artem-5",
    patientId: "artem",
    createdAt: "2026-07-26T14:00:00+03:00",
    situation: "Руководитель прошёл мимо и не поздоровался, как обычно.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 60 },
      { label: "Тревога", phase: "after", intensity: 35 },
    ],
    automaticThought:
      "Он злится на меня, наверное, из-за отчёта на прошлой неделе.",
    evidenceFor: "Обычно он здоровается.",
    evidenceAgainst:
      "Он шёл с телефоном у уха, разговаривал. Позже в чате написал мне по рабочему вопросу обычным тоном.",
    balancedThought: "Скорее всего, просто был занят разговором, это не про меня.",
    distortions: ["Персонализация", "Чтение мыслей"],
  },
  {
    id: "artem-6",
    patientId: "artem",
    createdAt: "2026-07-28T11:20:00+03:00",
    situation:
      "Нужно было позвонить в поддержку провайдера, чтобы решить вопрос с интернетом.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 66 },
      { label: "Тревога", phase: "after", intensity: 44 },
    ],
    automaticThought: "Я запутаюсь в словах, и оператор будет раздражаться.",
    evidenceFor: "В прошлый раз я пару раз повторял вопрос по-другому.",
    evidenceAgainst:
      "Оператор в итоге понял вопрос и решил проблему. Раздражения в голосе не было.",
    balancedThought: "Даже если запутаюсь в словах — это не помешает решить вопрос.",
    distortions: [],
  },
  {
    id: "artem-7",
    patientId: "artem",
    createdAt: "2026-07-29T18:50:00+03:00",
    situation: "Друг позвал на день рождения, где будет много незнакомых людей.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 80 },
      { label: "Тревога", phase: "after", intensity: 58 },
    ],
    automaticThought:
      "Я буду стоять один в углу, все заметят, что мне не с кем поговорить.",
    evidenceFor:
      "На похожих встречах раньше было тяжело подойти к незнакомым людям.",
    evidenceAgainst:
      "Обычно там оказывался хотя бы один знакомый, с которым можно было начать разговор. Именинник обычно знакомит гостей друг с другом.",
    balancedThought: "Будет неловко первые минуты, но обычно находится с кем поговорить.",
    distortions: [],
  },
  {
    id: "artem-8",
    patientId: "artem",
    createdAt: "2026-07-30T12:10:00+03:00",
    situation:
      "На встрече с клиентом клиент перебил меня и сам договорил мысль за меня.",
    moods: [
      { label: "Раздражение", phase: "before", intensity: 50 },
      { label: "Раздражение", phase: "after", intensity: 30 },
      { label: "Тревога", phase: "before", intensity: 55 },
      { label: "Тревога", phase: "after", intensity: 33 },
    ],
    automaticThought: "Он думает, что я плохо объясняю.",
    evidenceFor: "Перебил именно на моей фразе.",
    evidenceAgainst:
      "Он и коллегу перебивал в том же разговоре, похоже, это его манера общения. В конце он поблагодарил за подготовленные материалы.",
    balancedThought:
      "Похоже, это его обычный стиль разговора, а не оценка моей подачи.",
    distortions: [],
  },
  {
    id: "artem-9",
    patientId: "artem",
    createdAt: "2026-07-31T09:00:00+03:00",
    situation:
      "Нужно было выступить с коротким докладом по итогам недели перед всей командой.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 78 },
      { label: "Тревога", phase: "after", intensity: 52 },
    ],
    automaticThought: "Я собьюсь, и все увидят, что я нервничаю.",
    evidenceFor: "Руки немного дрожали, когда держал листок с заметками.",
    evidenceAgainst:
      "Доклад дошёл до конца без запинок по содержанию. После никто не задавал уточняющих вопросов про то, что я не раскрыл — значит, было понятно.",
    balancedThought:
      "Дрожь в руках заметил только я, по содержанию доклад был понятным.",
    distortions: ["Чтение мыслей"],
  },
  {
    id: "artem-10",
    patientId: "artem",
    createdAt: "2026-08-01T15:45:00+03:00",
    situation:
      "В общем чате коллега написал шутку, все поставили смайлики, я не знал, как отреагировать, и ничего не написал.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 45 },
      { label: "Тревога", phase: "after", intensity: 28 },
    ],
    automaticThought: "Теперь подумают, что я не умею общаться в компании.",
    evidenceFor: "Я единственный не отреагировал.",
    evidenceAgainst:
      "Никто не написал мне ничего по этому поводу. В другие разы я тоже не всегда реагирую на шутки, и это не вызывало вопросов.",
    balancedThought: "Не реагировать на одну шутку — это нормально, не все обязаны шутить в ответ.",
    distortions: [],
  },
  {
    id: "artem-11",
    patientId: "artem",
    createdAt: "2026-08-03T20:15:00+03:00",
    situation:
      "Коллега в личных сообщениях предложил вместе сходить на митап после работы, я долго не мог понять, что ответить, и в итоге написал «наверное, не смогу».",
    moods: [{ label: "Тревога", phase: "before", intensity: 70 }],
    automaticThought:
      "Он поймёт, что я просто не хочу с ним общаться, и больше не позовёт.",
    evidenceFor: "Я отказался без внятной причины.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
];

// ---------------------------------------------------------------------------
// Thought records — Ольга П. (31 запись за текущую неделю)
// ---------------------------------------------------------------------------

const OLGA_RECORDS: ThoughtRecord[] = [
  {
    id: "olga-1",
    patientId: "olga",
    createdAt: "2026-08-11T07:30:00+03:00",
    situation:
      "Проснулась, сразу нащупала пульс на запястье, насчитала 96 ударов в минуту лёжа.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 85 },
      { label: "Тревога", phase: "after", intensity: 68 },
    ],
    automaticThought: "96 — это слишком много, с сердцем что-то не так.",
    evidenceFor: "Число выше, чем я обычно у себя вижу.",
    evidenceAgainst:
      "Я только что проснулась и сразу считала, спросонья пульс всегда выше. Врач на прошлом приёме не находил отклонений.",
    balancedThought: "Пульс сразу после пробуждения не показатель, стоит перепроверить позже спокойно.",
    distortions: ["Катастрофизация"],
  },
  {
    id: "olga-2",
    patientId: "olga",
    createdAt: "2026-08-11T11:00:00+03:00",
    situation: "Заболела голова после долгой работы за компьютером, стала гуглить «головная боль опухоль симптомы».",
    moods: [{ label: "Страх", phase: "before", intensity: 88 }],
    automaticThought: "Это может быть опухоль мозга, головная боль неспроста.",
    evidenceFor: "Голова болит уже второй час.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-3",
    patientId: "olga",
    createdAt: "2026-08-11T15:20:00+03:00",
    situation: "После кофе почувствовала, что сердце бьётся чаще и сильнее, чем обычно.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 80 },
      { label: "Тревога", phase: "after", intensity: 60 },
    ],
    automaticThought: "У меня проблема с сердцем, это не просто от кофе.",
    evidenceFor: "Сердцебиение правда участилось.",
    evidenceAgainst:
      "Кофеин учащает пульс у большинства людей, это обычная реакция. Через полчаса сердцебиение вернулось к обычному.",
    balancedThought: "Похоже на реакцию на кофеин, а не на болезнь сердца.",
    distortions: ["Эмоциональное обоснование"],
  },
  {
    id: "olga-4",
    patientId: "olga",
    createdAt: "2026-08-11T21:40:00+03:00",
    situation:
      "Перед сном разглядывала родинку на плече в зеркале, показалось, что края неровные.",
    moods: [{ label: "Тревога", phase: "before", intensity: 90 }],
    automaticThought: "Неровные края — это признак меланомы.",
    evidenceFor: "В статье, которую читала днём, писали про неровные края как один из признаков.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-5",
    patientId: "olga",
    createdAt: "2026-08-12T06:50:00+03:00",
    situation: "Проснулась от лёгкого онемения в левой руке, рука была подвёрнута во сне.",
    moods: [
      { label: "Страх", phase: "before", intensity: 92 },
      { label: "Страх", phase: "after", intensity: 70 },
    ],
    automaticThought: "Онемение руки — это может быть инсульт.",
    evidenceFor: "Про онемение руки писали как про один из признаков инсульта.",
    evidenceAgainst:
      "Рука была подвёрнута под подушкой всю ночь, онемение прошло за пару минут после того, как я её расправила. Речь и лицо не менялись.",
    balancedThought: "Похоже на затёкшую руку от неудобной позы, а не на инсульт.",
    distortions: ["Катастрофизация"],
  },
  {
    id: "olga-6",
    patientId: "olga",
    createdAt: "2026-08-12T09:15:00+03:00",
    situation: "Разглядывала горло в зеркале, показалось, что миндалины немного увеличены.",
    moods: [{ label: "Тревога", phase: "before", intensity: 76 }],
    automaticThought: "Увеличенные миндалины — плохой знак, может быть что-то серьёзное.",
    evidenceFor: "На вид миндалины показались крупнее, чем в прошлый раз.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-7",
    patientId: "olga",
    createdAt: "2026-08-12T13:00:00+03:00",
    situation:
      "Зашла на форум пациентов почитать про свои симптомы, наткнулась на историю человека с похожими ощущениями и серьёзным диагнозом.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 89 },
      { label: "Тревога", phase: "after", intensity: 75 },
    ],
    automaticThought: "Раз у него было так же и оказалось серьёзно, значит и у меня то же самое.",
    evidenceFor: "Симптомы в описании очень похожи на мои.",
    evidenceAgainst:
      "На форум обычно пишут те, у кого был именно тяжёлый случай, это не отражает вероятность в целом. Врач, который меня смотрел, не находил оснований для такого диагноза.",
    balancedThought:
      "Один похожий рассказ на форуме — не диагноз. Стоит опираться на то, что говорит мой врач, а не на истории незнакомых людей.",
    distortions: ["Сверхобобщение", "Мысленный фильтр"],
  },
  {
    id: "olga-8",
    patientId: "olga",
    createdAt: "2026-08-12T17:45:00+03:00",
    situation: "После обеда заболел живот, стала искать в интернете «боль в животе после еды рак».",
    moods: [{ label: "Страх", phase: "before", intensity: 84 }],
    automaticThought: "Боль в животе после еды может быть признаком рака желудка.",
    evidenceFor: "Боль появляется не в первый раз в последнее время.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-9",
    patientId: "olga",
    createdAt: "2026-08-12T22:10:00+03:00",
    situation: "Перед сном ещё раз посчитала пульс, вышло 88.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 78 },
      { label: "Тревога", phase: "after", intensity: 58 },
    ],
    automaticThought: "88 вечером — тоже много, весь день что-то не так с сердцем.",
    evidenceFor: "Уже третий раз за день пульс кажется повышенным.",
    evidenceAgainst:
      "День был тревожным, а тревога сама по себе учащает пульс. Утром на приёме у терапевта в прошлом месяце пульс был в норме.",
    balancedThought: "Повышенный пульс за тревожный день можно объяснить самой тревогой.",
    distortions: [],
  },
  {
    id: "olga-10",
    patientId: "olga",
    createdAt: "2026-08-13T08:00:00+03:00",
    situation: "Ощупывала лимфоузлы на шее, один показался чуть плотнее, чем другие.",
    moods: [{ label: "Страх", phase: "before", intensity: 87 }],
    automaticThought: "Плотный лимфоузел — это может быть онкология.",
    evidenceFor: "На ощупь он правда отличается от остальных.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-11",
    patientId: "olga",
    createdAt: "2026-08-13T12:30:00+03:00",
    situation: "Измерила давление тонометром, показало 138 на 88.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 79 },
      { label: "Тревога", phase: "after", intensity: 62 },
    ],
    automaticThought: "138 на 88 — это уже опасно высокое давление.",
    evidenceFor: "Число выше, чем было в прошлый раз.",
    evidenceAgainst:
      "Я измеряла сразу после того, как поднялась по лестнице и понервничала из-за опоздания. Через 20 минут в покое давление обычно возвращается к обычным цифрам.",
    balancedThought: "Разовое повышение после нагрузки и стресса — ожидаемо, не значит хроническую проблему.",
    distortions: ["Катастрофизация"],
  },
  {
    id: "olga-12",
    patientId: "olga",
    createdAt: "2026-08-13T16:15:00+03:00",
    situation: "Опять заболела голова, стала искать в интернете, совпадает ли это с симптомами со вчерашнего дня.",
    moods: [{ label: "Тревога", phase: "before", intensity: 81 }],
    automaticThought: "Если голова болит второй день подряд, значит, вчерашние опасения подтверждаются.",
    evidenceFor: "Голова болела и вчера, и сегодня.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-13",
    patientId: "olga",
    createdAt: "2026-08-13T20:00:00+03:00",
    situation: "Вечером снова почувствовала учащённое сердцебиение, на этот раз без кофе.",
    moods: [
      { label: "Страх", phase: "before", intensity: 90 },
      { label: "Страх", phase: "after", intensity: 65 },
    ],
    automaticThought: "На этот раз кофе не было, значит, дело точно в сердце.",
    evidenceFor: "Сердцебиение ощущалось так же, как утром после кофе.",
    evidenceAgainst:
      "Перед этим я час читала тревожные статьи о симптомах. Сердцебиение прошло само за 10 минут, пока я отвлеклась на разговор с мужем.",
    balancedThought: "Похоже, сердцебиение связано с тревогой, а не только с кофеином.",
    distortions: [],
  },
  {
    id: "olga-14",
    patientId: "olga",
    createdAt: "2026-08-14T07:10:00+03:00",
    situation: "Утром снова разглядывала ту же родинку на плече, сфотографировала для сравнения.",
    moods: [{ label: "Тревога", phase: "before", intensity: 86 }],
    automaticThought: "Мне нужно фотографировать её каждый день, иначе я пропущу изменение.",
    evidenceFor: "Вчера показалось, что края неровные.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-15",
    patientId: "olga",
    createdAt: "2026-08-14T10:40:00+03:00",
    situation: "Заметила небольшое пятнышко на предплечье, сфотографировала и сравнивала с картинками в поиске.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 83 },
      { label: "Тревога", phase: "after", intensity: 64 },
    ],
    automaticThought: "Пятно похоже на одну из фотографий с сайта про рак кожи.",
    evidenceFor: "Форма отдалённо напоминает картинку из поиска.",
    evidenceAgainst:
      "Картинки в интернете подобраны как раз самые тревожные случаи. Похожее пятно у меня было пару лет назад и прошло само за неделю.",
    balancedThought: "Сравнение с картинками из интернета — плохой способ поставить себе диагноз, стоит показать дерматологу на приёме.",
    distortions: ["Мысленный фильтр"],
  },
  {
    id: "olga-16",
    patientId: "olga",
    createdAt: "2026-08-14T14:20:00+03:00",
    situation: "За рулём почувствовала лёгкое покалывание в пальцах левой руки.",
    moods: [{ label: "Страх", phase: "before", intensity: 91 }],
    automaticThought: "Покалывание в руке за рулём — предвестник инсульта или сердечного приступа.",
    evidenceFor: "Ощущение появилось внезапно.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-17",
    patientId: "olga",
    createdAt: "2026-08-14T18:00:00+03:00",
    situation: "Поднялась на четвёртый этаж пешком, заметила одышку.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 82 },
      { label: "Тревога", phase: "after", intensity: 63 },
    ],
    automaticThought: "Одышка от одного пролёта — значит, с лёгкими или сердцем серьёзная проблема.",
    evidenceFor: "Раньше поднималась и не замечала одышки так явно.",
    evidenceAgainst:
      "Я редко пользуюсь лестницей в последнее время, обычно езжу на лифте. Отдышалась за минуту без всяких последствий.",
    balancedThought: "Похоже на обычную нетренированность, а не на болезнь лёгких или сердца.",
    distortions: [],
  },
  {
    id: "olga-18",
    patientId: "olga",
    createdAt: "2026-08-14T23:00:00+03:00",
    situation: "Перед сном в третий раз за день посчитала пульс, вышло 94.",
    moods: [{ label: "Тревога", phase: "before", intensity: 85 }],
    automaticThought: "Опять высокий пульс, за день так и не разобралась, в чём дело.",
    evidenceFor: "Пульс весь день казался нестабильным.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-19",
    patientId: "olga",
    createdAt: "2026-08-15T09:00:00+03:00",
    situation: "Опять разглядывала горло в зеркале, миндалины показались ещё крупнее, чем в понедельник.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 84 },
      { label: "Тревога", phase: "after", intensity: 66 },
    ],
    automaticThought: "Миндалины продолжают расти, это точно что-то серьёзное.",
    evidenceFor: "На вид кажется, что стало больше, чем в понедельник.",
    evidenceAgainst:
      "Я разглядываю горло уже несколько дней подряд в разном освещении, оценить размер на глаз сложно. Горло не болит, температуры нет.",
    balancedThought: "Скорее всего, разница в ощущениях связана с частым разглядыванием, а не с реальным изменением.",
    distortions: ["Эмоциональное обоснование"],
  },
  {
    id: "olga-20",
    patientId: "olga",
    createdAt: "2026-08-15T13:40:00+03:00",
    situation: "После обеда снова заболел живот в том же месте, что и во вторник.",
    moods: [{ label: "Страх", phase: "before", intensity: 86 }],
    automaticThought: "Боль повторяется в одном месте — значит, там точно что-то не так.",
    evidenceFor: "Уже второй раз за неделю болит в одной области.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-21",
    patientId: "olga",
    createdAt: "2026-08-15T17:00:00+03:00",
    situation: "Читала на форуме пациентов новую тему про симптомы, похожие на её собственные ощущения за день.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 88 },
      { label: "Тревога", phase: "after", intensity: 70 },
    ],
    automaticThought: "Чем больше совпадений нахожу, тем больше уверена, что со мной что-то серьёзное.",
    evidenceFor: "Несколько описанных симптомов действительно похожи на мои.",
    evidenceAgainst:
      "Я специально ищу совпадения и не обращаю внимания на несовпадения. Симптомы вроде усталости и боли в животе есть у огромного числа людей без серьёзных диагнозов.",
    balancedThought: "Поиск совпадений на форуме больше подпитывает тревогу, чем даёт реальную информацию.",
    distortions: ["Мысленный фильтр"],
  },
  {
    id: "olga-22",
    patientId: "olga",
    createdAt: "2026-08-15T21:15:00+03:00",
    situation: "Опять заболела голова, вспомнила статью про опухоль мозга с понедельника.",
    moods: [{ label: "Страх", phase: "before", intensity: 89 }],
    automaticThought: "Головная боль третий день за неделю — точно не просто так.",
    evidenceFor: "Голова болела в понедельник, в среду и сегодня.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-23",
    patientId: "olga",
    createdAt: "2026-08-16T08:30:00+03:00",
    situation: "Измерила давление сразу после пробуждения, тонометр показал 135 на 86.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 80 },
      { label: "Тревога", phase: "after", intensity: 61 },
    ],
    automaticThought: "Давление опять повышено с самого утра, это тревожный сигнал.",
    evidenceFor: "Цифры выше, чем считаются идеальными.",
    evidenceAgainst:
      "Я измеряла сразу после того, как проснулась от будильника, ещё в тревоге от того, что могла проспать. В спокойном состоянии днём цифры обычно ниже.",
    balancedThought: "Однократное измерение сразу после резкого пробуждения не показывает реальную картину.",
    distortions: [],
  },
  {
    id: "olga-24",
    patientId: "olga",
    createdAt: "2026-08-16T12:00:00+03:00",
    situation: "Ощупывала лимфоузлы на шее второй день подряд, сравнивала ощущения со вчерашними.",
    moods: [{ label: "Страх", phase: "before", intensity: 88 }],
    automaticThought: "Раз я снова его чувствую, значит, он точно есть и это плохо.",
    evidenceFor: "Нащупала то же самое место, что и вчера.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-25",
    patientId: "olga",
    createdAt: "2026-08-16T16:50:00+03:00",
    situation: "Снова разглядывала родинку на плече в зеркале при другом освещении.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 84 },
      { label: "Тревога", phase: "after", intensity: 67 },
    ],
    automaticThought: "При этом освещении родинка выглядит по-другому, значит, она меняется.",
    evidenceFor: "Цвет и края выглядят не так, как утром.",
    evidenceAgainst:
      "Освещение в ванной жёлтое, а сейчас дневной свет из окна — это меняет то, как выглядит любая родинка. Дерматолог смотрел эту родинку полгода назад и не увидел ничего подозрительного.",
    balancedThought: "Разница, скорее всего, из-за освещения, а не из-за реального изменения родинки.",
    distortions: ["Катастрофизация"],
  },
  {
    id: "olga-26",
    patientId: "olga",
    createdAt: "2026-08-16T20:30:00+03:00",
    situation: "После лёгкой тренировки почувствовала, что сердце бьётся сильнее обычного.",
    moods: [{ label: "Тревога", phase: "before", intensity: 79 }],
    automaticThought: "Сердце не должно так сильно биться от лёгкой нагрузки, это плохой знак.",
    evidenceFor: "Ощущение сердцебиения было заметным.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-27",
    patientId: "olga",
    createdAt: "2026-08-17T07:45:00+03:00",
    situation: "Утром первым делом посчитала пульс лёжа в постели, вышло 90.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 83 },
      { label: "Тревога", phase: "after", intensity: 64 },
    ],
    automaticThought: "Опять пульс выше 90 с утра, за неделю это повторяется постоянно.",
    evidenceFor: "На этой неделе несколько раз утренний пульс был около 90.",
    evidenceAgainst:
      "Я стала измерять пульс каждое утро сразу после будильника, в состоянии лёгкой тревоги ожидания. Терапевт на последнем приёме не находил отклонений в работе сердца.",
    balancedThought: "Утренние измерения в тревоге не отражают состояние сердца в целом.",
    distortions: [],
  },
  {
    id: "olga-28",
    patientId: "olga",
    createdAt: "2026-08-17T11:20:00+03:00",
    situation: "За завтраком почувствовала лёгкое покалывание в пальцах правой руки.",
    moods: [{ label: "Страх", phase: "before", intensity: 87 }],
    automaticThought: "Опять покалывание в руке, на этот раз в другой — значит, дело не в одной руке, а во всём теле.",
    evidenceFor: "Раньше покалывание было в левой руке, теперь в правой.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-29",
    patientId: "olga",
    createdAt: "2026-08-17T14:50:00+03:00",
    situation: "Сфотографировала пятнышко на предплечье ещё раз и сравнила с фотографией с понедельника.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 81 },
      { label: "Тревога", phase: "after", intensity: 63 },
    ],
    automaticThought: "Мне кажется, пятно немного увеличилось за неделю.",
    evidenceFor: "На новом фото пятно выглядит чуть крупнее.",
    evidenceAgainst:
      "Фотографии сделаны разными камерами и с разного расстояния, сравнивать размер на глаз ненадёжно. Записалась на приём к дерматологу на следующей неделе — там измерят точно.",
    balancedThought: "Сравнение фотографий вручную не даёт надёжного ответа, стоит дождаться приёма врача.",
    distortions: ["Эмоциональное обоснование"],
  },
  {
    id: "olga-30",
    patientId: "olga",
    createdAt: "2026-08-17T18:30:00+03:00",
    situation: "После лестницы снова появилась одышка, в этот раз показалось сильнее, чем во четверг.",
    moods: [{ label: "Тревога", phase: "before", intensity: 85 }],
    automaticThought: "Одышка усиливается от раза к разу, значит, лёгким или сердцу становится хуже.",
    evidenceFor: "В этот раз отдышаться получилось не сразу.",
    evidenceAgainst: "",
    balancedThought: "",
    distortions: [],
  },
  {
    id: "olga-31",
    patientId: "olga",
    createdAt: "2026-08-17T22:00:00+03:00",
    situation: "Перед сном зашла на форум пациентов почитать новые сообщения в теме, которую отслеживает всю неделю.",
    moods: [
      { label: "Тревога", phase: "before", intensity: 86 },
      { label: "Тревога", phase: "after", intensity: 69 },
    ],
    automaticThought: "Нужно дочитать все ответы в теме, иначе пропущу что-то важное про свои симптомы.",
    evidenceFor: "В теме появилось несколько новых сообщений с похожими описаниями.",
    evidenceAgainst:
      "Я провожу на этом форуме больше часа каждый вечер, и тревога после этого всегда выше, а не ниже. Ни один из авторов темы не является врачом.",
    balancedThought:
      "Чтение форума перед сном не даёт медицинского ответа, а только усиливает тревогу на ночь.",
    distortions: ["Сверхобобщение"],
  },
];

export const THOUGHT_RECORDS: ThoughtRecord[] = [
  ...MARINA_RECORDS,
  ...ARTEM_RECORDS,
  ...OLGA_RECORDS,
];

// ---------------------------------------------------------------------------
// Хелперы доступа к данным (простые выборки, без вычислений и интерпретаций)
// ---------------------------------------------------------------------------

export function getPatient(id: string): Patient | undefined {
  return PATIENTS.find((patient) => patient.id === id);
}

export function getThoughtRecordsByPatient(patientId: string): ThoughtRecord[] {
  return THOUGHT_RECORDS.filter((record) => record.patientId === patientId);
}

export function getDailyCheckinsByPatient(patientId: string): DailyCheckin[] {
  return DAILY_CHECKINS.filter((checkin) => checkin.patientId === patientId);
}

export function getGad7ResponsesByPatient(patientId: string): Gad7Response[] {
  return GAD7_RESPONSES.filter((response) => response.patientId === patientId);
}

export function getHomeworkItemsByPatient(patientId: string): HomeworkItem[] {
  return HOMEWORK_ITEMS.filter((item) => item.patientId === patientId);
}
