let promise = fetch(url, [options])
//Без options это простой GET-запрос, скачивающий содержимое по адресу url.

[Exposed=(Window,Worker)]interface Response {
    constructor(optional BodyInit? body
   = null, optional ResponseInit init
   = {});
  
    [NewObject] static Response error();
    [NewObject] static Response redirect(USVString url
  , optional unsigned short status
   = 302);
    [NewObject] static Response json(any data
  , optional ResponseInit init
   = {});
  
    readonly attribute ResponseType type;
  
    readonly attribute USVString url;
    readonly attribute boolean redirected;
    readonly attribute unsigned short status;
    readonly attribute boolean ok;
    readonly attribute ByteString statusText;
    [SameObject] readonly attribute Headers headers;
  
    [NewObject] Response clone();
  };
  Response includes Body;
  
  dictionary ResponseInit {
    unsigned short status = 200;
    ByteString statusText = "";
    HeadersInit headers;
  };
  
  enum ResponseType { "basic"
  , "cors"
  , "default"
  , "error"
  , "opaque"
  , "opaqueredirect"
   };
//-----------------------------------------------------------------------------//
   Есть список запрещённых HTTP-заголовков, которые мы не можем установить:

    Accept-Charset, Accept-Encoding
    Access-Control-Request-Headers
    Access-Control-Request-Method
    Connection
    Content-Length
    Cookie, Cookie2
    Date
    DNT
    Expect
    Host
    Keep-Alive
    Origin
    Referer
    TE
    Trailer
    Transfer-Encoding
    Upgrade
    Via
    Proxy-*
    Sec-*
