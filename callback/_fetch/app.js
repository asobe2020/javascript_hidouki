const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", async () => {
  log.textContent = "";

  log.textContent = `${log.textContent}Fetch リクエストを開始しました\n`;

  try {
    const response = await fetch("https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");

    log.textContent = `${log.textContent}ステータス ${response.status} で完了しました`;
  } catch (error) {
    log.textContent = `${log.textContent}リクエスト中にエラーが発生しました: ${error.message}`;
  }
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
