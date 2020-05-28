(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{660:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("随着前后端分离的发展，以及数据中心的建立，越来越多的公司会创建一个中心服务器，服务于各种产品线。")]),s._v(" "),t("p",[s._v("而这些产品线上的产品，它们可能有着各种终端设备，包括但不仅限于浏览器、桌面应用、移动端应用、平板应用、甚至智能家居")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://mdrs.yuanjin.tech/img/image-20200422163727151.png",alt:"image-20200422163727151"}})]),s._v(" "),t("blockquote",[t("p",[s._v("实际上，不同的产品线通常有自己的服务器，产品内部的数据一般和自己的服务器交互。")]),s._v(" "),t("p",[s._v("但中心服务器仍然有必要存在，因为同一家公司的产品总是会存在共享的数据，比如用户数据")])]),s._v(" "),t("p",[s._v("这些设备与中心服务器之间会进行http通信")]),s._v(" "),t("p",[s._v("一般来说，中心服务器至少承担着认证和授权的功能，例如登录：各种设备发送消息到中心服务器，然后中心服务器响应一个身份令牌（参见"),t("a",{attrs:{href:"http://www.yuanjin.tech/article/98",target:"_blank",rel:"noopener noreferrer"}},[s._v("cookie原理详解"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("p",[s._v("当这种结构出现后，就出现一个问题：它们之间还能使用传统的cookie方式传递令牌信息吗？")]),s._v(" "),t("p",[s._v("其实，也是可以的🐶，因为cookie在传输中无非是一个消息头而已，只不过浏览器对这个消息头有特殊处理罢了。")]),s._v(" "),t("p",[s._v("但浏览器之外的设备肯定不喜欢cookie，因为浏览器有着对cookie完善的管理机制，但是在其他设备上，就需要开发者自己手动处理了")]),s._v(" "),t("p",[s._v("jwt的出现就是为了解决这个问题")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("jwt全称"),t("code",[s._v("Json Web Token")]),s._v("，强行翻译过来就是"),t("code",[s._v("json格式的互联网令牌")]),s._v("（算了，还是不要强行翻译了🐷）")]),s._v(" "),t("p",[s._v("它要解决的问题，就是为多种终端设备，提供"),t("strong",[s._v("统一的、安全的")]),s._v("令牌格式")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://mdrs.yuanjin.tech/img/image-20200422165350268.png",alt:"image-20200422165350268"}})]),s._v(" "),t("p",[s._v("因此，jwt只是一个令牌格式而已，你可以把它存储到cookie，也可以存储到localstorage，没有任何限制！")]),s._v(" "),t("p",[s._v("同样的，对于传输，你可以使用任何传输方式来传输jwt，一般来说，我们会使用消息头来传输它")]),s._v(" "),t("p",[s._v("比如，当登录成功后，服务器可以给客户端响应一个jwt：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("HTTP/1.1 200 OK\n...\nset-cookie:token=jwt令牌\nauthorization:jwt令牌\n...\n\n{..., token:jwt令牌}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("可以看到，jwt令牌可以出现在响应的任何一个地方，客户端和服务器自行约定即可。")]),s._v(" "),t("blockquote",[t("p",[s._v("当然，它也可以出现在响应的多个地方，比如为了充分利用浏览器的cookie，同时为了照顾其他设备，也可以让jwt出现在"),t("code",[s._v("set-cookie")]),s._v("和"),t("code",[s._v("authorization或body")]),s._v("中，尽管这会增加额外的传输量。")])]),s._v(" "),t("p",[s._v("当客户端拿到令牌后，它要做的只有一件事：存储它。")]),s._v(" "),t("p",[s._v("你可以存储到任何位置，比如手机文件、PC文件、localstorage、cookie")]),s._v(" "),t("p",[s._v("当后续请求发生时，你只需要将它作为请求的一部分发送到服务器即可。")]),s._v(" "),t("p",[s._v("虽然jwt没有明确要求应该如何附带到请求中，但通常我们会使用如下的格式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("GET /api/resources HTTP/1.1\n...\nauthorization: bearer jwt令牌\n...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("这种格式是OAuth2附带token的一种规范格式")]),s._v(" "),t("p",[s._v("至于什么是OAuth2，那是另一个话题了")])]),s._v(" "),t("p",[s._v("这样一来，服务器就能够收到这个令牌了，通过对令牌的验证，即可知道该令牌是否有效。")]),s._v(" "),t("p",[s._v("它们的完整交互流程是非常简单清晰的")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://mdrs.yuanjin.tech/img/image-20200422172837190.png",alt:"image-20200422172837190"}})]),s._v(" "),t("h2",{attrs:{id:"令牌的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#令牌的组成"}},[s._v("#")]),s._v(" 令牌的组成")]),s._v(" "),t("p",[s._v("为了保证令牌的安全性，jwt令牌由三个部分组成，分别是：")]),s._v(" "),t("ol",[t("li",[s._v("header：令牌头部，记录了整个令牌的类型和签名算法")]),s._v(" "),t("li",[s._v("payload：令牌负荷，记录了保存的主体信息，比如你要保存的用户信息就可以放到这里")]),s._v(" "),t("li",[s._v("signature：令牌签名，按照头部固定的签名算法对整个令牌进行签名，该签名的作用是：保证令牌不被伪造和篡改")])]),s._v(" "),t("p",[s._v("它们组合而成的完整格式是："),t("code",[s._v("header.payload.signature")])]),s._v(" "),t("p",[s._v("比如，一个完整的jwt令牌如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9.BCwUy3jnUQ_E6TqCayc7rCHkx-vxxdagUwPOWqwYCFc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它各个部分的值分别是：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("header：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")])]),s._v(" "),t("li",[t("code",[s._v("payload：eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9")])]),s._v(" "),t("li",[t("code",[s._v("signature: BCwUy3jnUQ_E6TqCayc7rCHkx-vxxdagUwPOWqwYCFc")])])]),s._v(" "),t("p",[s._v("下面分别对每个部分进行说明")]),s._v(" "),t("h3",{attrs:{id:"header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[s._v("#")]),s._v(" header")]),s._v(" "),t("p",[s._v("它是令牌头部，记录了整个令牌的类型和签名算法")]),s._v(" "),t("p",[s._v("它的格式是一个"),t("code",[s._v("json")]),s._v("对象，如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HS256"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typ"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("该对象记录了：")]),s._v(" "),t("ul",[t("li",[s._v("alg：signature部分使用的签名算法，通常可以取两个值\n"),t("ul",[t("li",[s._v("HS256：一种对称加密算法，使用同一个秘钥对signature加密解密")]),s._v(" "),t("li",[s._v("RS256：一种非对称加密算法，使用私钥加密，公钥解密")])])]),s._v(" "),t("li",[s._v("typ：整个令牌的类型，固定写"),t("code",[s._v("JWT")]),s._v("即可")])]),s._v(" "),t("p",[s._v("设置好了"),t("code",[s._v("header")]),s._v("之后，就可以生成"),t("code",[s._v("header")]),s._v("部分了")]),s._v(" "),t("p",[s._v("具体的生成方式及其简单，就是把"),t("code",[s._v("header")]),s._v("部分使用"),t("code",[s._v("base64 url")]),s._v("编码即可")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("base64 url")]),s._v("不是一个加密算法，而是一种编码方式，它是在"),t("code",[s._v("base64")]),s._v("算法的基础上对"),t("code",[s._v("+")]),s._v("、"),t("code",[s._v("=")]),s._v("、"),t("code",[s._v("/")]),s._v("三个字符做出特殊处理的算法")]),s._v(" "),t("p",[s._v("而"),t("code",[s._v("base64")]),s._v("是使用64个可打印字符来表示一个二进制数据，具体的做法参考"),t("a",{attrs:{href:"https://baike.baidu.com/item/base64/8545775?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度百科"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("浏览器提供了"),t("code",[s._v("btoa")]),s._v("函数，可以完成这个操作：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("btoa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HS256"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typ"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 得到字符串：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("同样的，浏览器也提供了"),t("code",[s._v("atob")]),s._v("函数，可以对其进行解码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("atob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 得到字符串：{"alg":"HS256","typ":"JWT"}')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("nodejs中没有提供这两个函数，可以安装第三方库"),t("code",[s._v("atob")]),s._v("和"),t("code",[s._v("bota")]),s._v("搞定")]),s._v(" "),t("p",[s._v("或者，手动搞定")])]),s._v(" "),t("h3",{attrs:{id:"payload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[s._v("#")]),s._v(" payload")]),s._v(" "),t("p",[s._v("这部分是jwt的主体信息，它仍然是一个JSON对象，它可以包含以下内容：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ss"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"发行者"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iat"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"发布时间"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exp"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"到期时间"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sub"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"主题"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aud"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"听众"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nbf"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在此之前不可用"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jti"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT ID"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("以上属性可以全写，也可以一个都不写，它只是一个规范，就算写了，也需要你在将来验证这个jwt令牌时手动处理才能发挥作用")]),s._v(" "),t("p",[s._v("上述属性表达的含义分别是：")]),s._v(" "),t("ul",[t("li",[s._v("ss：发行该jwt的是谁，可以写公司名字，也可以写服务名称")]),s._v(" "),t("li",[s._v("iat：该jwt的发放时间，通常写当前时间的时间戳")]),s._v(" "),t("li",[s._v("exp：该jwt的到期时间，通常写时间戳")]),s._v(" "),t("li",[s._v("sub：该jwt是用于干嘛的")]),s._v(" "),t("li",[s._v("aud：该jwt是发放给哪个终端的，可以是终端类型，也可以是用户名称，随意一点")]),s._v(" "),t("li",[s._v("nbf：一个时间点，在该时间点到达之前，这个令牌是不可用的")]),s._v(" "),t("li",[s._v("jti：jwt的唯一编号，设置此项的目的，主要是为了防止重放攻击（重放攻击是在某些场景下，用户使用之前的令牌发送到服务器，被服务器正确的识别，从而导致不可预期的行为发生）")])]),s._v(" "),t("p",[s._v("可是到现在，看了半天，没有出现我想要写入的数据啊😂")]),s._v(" "),t("p",[s._v("当用户登陆成功之后，我可能需要把用户的一些信息写入到jwt令牌中，比如用户id、账号等等（密码就算了😳）")]),s._v(" "),t("p",[s._v("其实很简单，payload这一部分只是一个json对象而已，你可以向对象中加入任何想要加入的信息")]),s._v(" "),t("p",[s._v("比如，下面的json对象仍然是一个有效的payload")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iat"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1587548215")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("foo: bar")]),s._v("是我们自定义的信息，"),t("code",[s._v("iat: 1587548215")]),s._v("是jwt规范中的信息")]),s._v(" "),t("p",[s._v("最终，payload部分和header一样，需要通过"),t("code",[s._v("base64 url")]),s._v("编码得到：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("btoa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iat"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1587548215")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 得到字符串：eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[s._v("#")]),s._v(" signature")]),s._v(" "),t("p",[s._v("这一部分是jwt的签名，正是它的存在，保证了整个jwt不被篡改")]),s._v(" "),t("p",[s._v("这部分的生成，是对前面两个部分的编码结果，按照头部指定的方式进行加密")]),s._v(" "),t("p",[s._v("比如：头部指定的加密方法是"),t("code",[s._v("HS256")]),s._v("，前面两部分的编码结果是"),t("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9")])]),s._v(" "),t("p",[s._v("则第三部分就是用对称加密算法"),t("code",[s._v("HS256")]),s._v("对字符串"),t("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9")]),s._v("进行加密，当然你得指定一个秘钥，比如"),t("code",[s._v("shhhhh")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HS256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shhhhh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 得到：BCwUy3jnUQ_E6TqCayc7rCHkx-vxxdagUwPOWqwYCFc")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("最终，将三部分组合在一起，就得到了完整的jwt")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODc1NDgyMTV9.BCwUy3jnUQ_E6TqCayc7rCHkx-vxxdagUwPOWqwYCFc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于签名使用的秘钥保存在服务器，这样一来，客户端就无法伪造出签名，因为它拿不到秘钥。")]),s._v(" "),t("p",[s._v("换句话说，之所以说无法伪造jwt，就是因为第三部分的存在。")]),s._v(" "),t("p",[s._v("而前面两部分并没有加密，只是一个编码结果而已，可以认为几乎是明文传输")]),s._v(" "),t("blockquote",[t("p",[s._v("这不会造成太大的问题，因为既然用户登陆成功了，它当然有权力查看自己的用户信息")]),s._v(" "),t("p",[s._v("甚至在某些网站，用户的基本信息可以被任何人查看")]),s._v(" "),t("p",[s._v("你要保证的，是不要把敏感的信息存放到jwt中，比如密码")])]),s._v(" "),t("p",[s._v("jwt的"),t("code",[s._v("signature")]),s._v("可以保证令牌不被伪造，那如何保证令牌不被篡改呢？")]),s._v(" "),t("p",[s._v("比如，某个用户登陆成功了，获得了jwt，但他人为的篡改了"),t("code",[s._v("payload")]),s._v("，比如把自己的账户余额修改为原来的两倍，然后重新编码出"),t("code",[s._v("payload")]),s._v("发送到服务器，服务器如何得知这些信息被篡改过了呢？")]),s._v(" "),t("p",[s._v("这就要说到令牌的验证了")]),s._v(" "),t("h2",{attrs:{id:"令牌的验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#令牌的验证"}},[s._v("#")]),s._v(" 令牌的验证")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://mdrs.yuanjin.tech/img/image-20200422172837190.png",alt:"image-20200422172837190"}})]),s._v(" "),t("p",[s._v("令牌在服务器组装完成后，会以任意的方式发送到客户端")]),s._v(" "),t("p",[s._v("客户端会把令牌保存起来，后续的请求会将令牌发送给服务器")]),s._v(" "),t("p",[s._v("而服务器需要验证令牌是否正确，如何验证呢？")]),s._v(" "),t("p",[s._v("首先，服务器要验证这个令牌是否被篡改过，验证方式非常简单，就是对"),t("code",[s._v("header+payload")]),s._v("用同样的秘钥和加密算法进行重新加密")]),s._v(" "),t("p",[s._v("然后把加密的结果和传入jwt的"),t("code",[s._v("signature")]),s._v("进行对比，如果完全相同，则表示前面两部分没有动过，就是自己颁发的，如果不同，肯定是被篡改过了。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("传入的header.传入的payload.传入的signature\n新的signature = header中的加密算法(传入的header.传入的payload, 秘钥)\n验证：新的signature == 传入的signature\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当令牌验证为没有被篡改后，服务器可以进行其他验证：比如是否过期、听众是否满足要求等等，这些就视情况而定了")]),s._v(" "),t("p",[s._v("注意：这些验证都需要服务器手动完成，没有哪个服务器会给你进行自动验证，当然，你可以借助第三方库来完成这些操作")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("最后，总结一下jwt的特点：")]),s._v(" "),t("ul",[t("li",[s._v("jwt本质上是一种令牌格式。它和终端设备无关，同样和服务器无关，甚至与如何传输无关，它只是规范了令牌的格式而已")]),s._v(" "),t("li",[s._v("jwt由三部分组成：header、payload、signature。主体信息在payload")]),s._v(" "),t("li",[s._v("jwt难以被篡改和伪造。这是因为有第三部分的签名存在。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);