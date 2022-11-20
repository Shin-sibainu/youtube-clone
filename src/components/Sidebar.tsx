import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "ホーム",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "探索",
    },

    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "登録チャンネル",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "ライブラリ",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "履歴",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "自分の動画",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "後で見る",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "音楽",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "スポーツ",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "ゲーム",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "映画と番組",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "設定",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "報告履歴",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "ヘルプ",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "フィードバック",
    },
  ];

  const textLinks = [
    [
      "概要",
      "プレスルーム",
      "著作権",
      "お問い合わせ",
      "クリエイター向け",
      "広告掲載",
      "開発者向け",
    ],
    [
      "利用規約",
      "プライバシー",
      "ポリシーとセキュリティ",
      "Youtubeの仕組み",
      "新機能を試してみる",
    ],
  ];
  return (
    <div className="w-2/12 bg-[#2b2b2b] pr-5 pb-8 overflow-auto sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl ${
                name === "ホーム" ? "bg-slate-600" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
    </div>
  );
};

export default Sidebar;
