/**
 * @param {{user: string, pass:string}} auth объект с пользователем (email) паролем
 * @param {{to: string, from: string}} toFrom to - это список email-адресов через запятую, from - отправитель (label не email)
 * @param {{subject: string, text: string}} body тип объекта предмет и текст письма
 * @param {string} host адрес почтового сервера (по умолчанию smtp.yandex.ru)
 * @param {number} port - порт почтового сервера (по умолчанию 465)
 * @param {boolean} secure признак защищенности канала (по умолчанию true)
 */
module.exports.sendMail = async function (
  auth,
  toFrom,
  body,
  host = "smtp.yandex.ru",
  port = 465,
  secure = true
) {
  const { default: nodemailer } = await import(
    "./nodemailer/lib/nodemailer.js"
  );

  const transport = nodemailer.createTransport({
    host,
    port,
    secure,
    auth,
  });

  return await transport
    .sendMail({
      from: toFrom.from ? `${toFrom.from} ${auth.user}` : auth.user,
      to: toFrom.to,
      subject: body.subject,
      html: body.text,
    })
    .catch((err) => err);
};
