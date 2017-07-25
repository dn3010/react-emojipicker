'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: ', ';\n  opacity: ', ';\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n  width: 340px;\n  height: 350px;\n  overflow-y: scroll;\n  z-index: 100;\n'], ['\n  position: ', ';\n  opacity: ', ';\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n  width: 340px;\n  height: 350px;\n  overflow-y: scroll;\n  z-index: 100;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n'], ['\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n  float: left;\n  width: 75%;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n  float: left;\n  width: 75%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 16px !important;\n    width: 16px !important;\n  }\n'], ['\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 16px !important;\n    width: 16px !important;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex-direction: column;\n  float: left;\n  width: 15%;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n'], ['\n  flex-direction: column;\n  float: left;\n  width: 15%;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding-left: 0.35rem;\n  padding: 0.8rem\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ', ';\n    height: 24px !important;\n    width: 24px !important;\n  }\n'], ['\n  padding-left: 0.35rem;\n  padding: 0.8rem\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ', ';\n    height: 24px !important;\n    width: 24px !important;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _emojione = require('emojione');

var _emojione2 = _interopRequireDefault(_emojione);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PEOPLE_EMOJIS = { ":grinning:": "😀", ":smiley:": "😃", ":smile:": "😄", ":grin:": "😁", ":laughing:": "😆", ":sweat_smile:": "😅", ":joy:": "😂", ":innocent:": "😇", ":relaxed:": "☺️", ":blush:": "😊", ":wink:": "😉", ":relieved:": "😌", ":heart_eyes:": "😍", ":kissing_heart:": "😘", ":kissing:": "😗", ":kissing_smiling_eyes:": "😙", ":kissing_closed_eyes:": "😚", ":yum:": "😋", ":stuck_out_tongue_winking_eye:": "😜", ":stuck_out_tongue_closed_eyes:": "😝", ":stuck_out_tongue:": "😛", ":sunglasses:": "😎", ":smirk:": "😏", ":unamused:": "😒", ":disappointed:": "😞", ":pensive:": "😔", ":worried:": "😟", ":confused:": "😕", ":persevere:": "😣", ":confounded:": "😖", ":tired_face:": "😫", ":weary:": "😩", ":triumph:": "😤", ":angry:": "😠", ":rage:": "😡", ":no_mouth:": "😶", ":neutral_face:": "😐", ":expressionless:": "😑", ":hushed:": "😯", ":frowning:": "😦", ":anguished:": "😧", ":open_mouth:": "😮", ":astonished:": "😲", ":dizzy_face:": "😵", ":flushed:": "😳", ":scream:": "😱", ":fearful:": "😨", ":cold_sweat:": "😰", ":cry:": "😢", ":disappointed_relieved:": "😥", ":sob:": "😭", ":sweat:": "😓", ":sleepy:": "😪", ":sleeping:": "😴", ":grimacing:": "😬", ":mask:": "😷", ":smiling_imp:": "😈", ":imp:": "👿", ":japanese_ogre:": "👹", ":japanese_goblin:": "👺", ":poop:": "💩", ":ghost:": "👻", ":skull:": "💀", ":alien:": "👽", ":space_invader:": "👾", ":jack_o_lantern:": "🎃", ":smiley_cat:": "😺", ":smile_cat:": "😸", ":joy_cat:": "😹", ":heart_eyes_cat:": "😻", ":smirk_cat:": "😼", ":kissing_cat:": "😽", ":scream_cat:": "🙀", ":crying_cat_face:": "😿", ":pouting_cat:": "😾", ":open_hands:": "👐", ":raised_hands:": "🙌", ":clap:": "👏", ":pray:": "🙏", ":thumbsup:": "👍", ":thumbsdown:": "👎", ":punch:": "👊", ":fist:": "✊", ":v:": "✌️", ":ok_hand:": "👌", ":point_left:": "👈", ":point_right:": "👉", ":point_up_2:": "👆", ":point_down:": "👇", ":point_up:": "☝️", ":raised_hand:": "✋", ":wave:": "👋", ":muscle:": "💪", ":middle_finger:": "🖕", ":writing_hand:": "✍", ":nail_care:": "💅", ":lipstick:": "💄", ":kiss:": "💋", ":lips:": "👄", ":tongue:": "👅", ":ear:": "👂", ":nose:": "👃", ":footprints:": "👣", ":eye:": "👁", ":eyes:": "👀", ":dress:": "👗", ":high_heel:": "👠", ":mans_shoe:": "👞", ":athletic_shoe:": "👟", ":womans_hat:": "👒", ":tophat:": "🎩", ":mortar_board:": "🎓", ":crown:": "👑", ":school_satchel:": "🎒", ":pouch:": "👝", ":purse:": "👛", ":handbag:": "👜", ":briefcase:": "💼", ":eyeglasses:": "👓", ":dark_sunglasses:": "🕶" };
var ANIMALS_NATURE_EMOJIS = { ":dog:": "🐶", ":cat:": "🐱", ":mouse:": "🐭", ":hamster:": "🐹", ":rabbit:": "🐰", ":bear:": "🐻", ":panda_face:": "🐼", ":koala:": "🐨", ":tiger:": "🐯", ":lion_face:": "🦁", ":cow:": "🐮", ":pig:": "🐷", ":pig_nose:": "🐽", ":frog:": "🐸", ":monkey_face:": "🐵", ":speak_no_evil:": "🙊", ":hear_no_evil:": "🙉", ":monkey:": "🐒", ":chicken:": "🐔", ":penguin:": "🐧", ":bird:": "🐦", ":baby_chick:": "🐤", ":hatching_chick:": "🐣", ":hatched_chick:": "🐥", ":wolf:": "🐺", ":boar:": "🐗", ":horse:": "🐴", ":bee:": "🐝", ":bug:": "🐛", ":snail:": "🐌", ":shell:": "🐚", ":beetle:": "🐞", ":ant:": "🐜", ":spider:": "🕷", ":spider_web:": "🕸", ":turtle:": "🐢", ":snake:": "🐍", ":scorpion:": "🦂", ":crab:": "🦀", ":octopus:": "🐙", ":tropical_fish:": "🐠", ":fish:": "🐟", ":blowfish:": "🐡", ":dolphin:": "🐬", ":whale:": "🐳", ":whale2:": "🐋", ":crocodile:": "🐊", ":leopard:": "🐆", ":tiger2:": "🐅", ":water_buffalo:": "🐃", ":ox:": "🐂", ":cow2:": "🐄", ":dromedary_camel:": "🐪", ":camel:": "🐫", ":elephant:": "🐘", ":racehorse:": "🐎", ":pig2:": "🐖", ":goat:": "🐐", ":ram:": "🐏", ":sheep:": "🐑", ":dog2:": "🐕", ":poodle:": "🐩", ":cat2:": "🐈", ":rooster:": "🐓", ":turkey:": "🦃", ":rabbit2:": "🐇", ":mouse2:": "🐁", ":rat:": "🐀", ":chipmunk:": "🐿", ":feet:": "🐾", ":dragon:": "🐉", ":dragon_face:": "🐲", ":cactus:": "🌵", ":christmas_tree:": "🎄", ":evergreen_tree:": "🌲", ":deciduous_tree:": "🌳", ":palm_tree:": "🌴", ":seedling:": "🌱", ":herb:": "🌿", ":shamrock:": "☘", ":four_leaf_clover:": "🍀", ":bamboo:": "🎍", ":tanabata_tree:": "🎋", ":leaves:": "🍃", ":fallen_leaf:": "🍂", ":maple_leaf:": "🍁", ":mushroom:": "🍄", ":ear_of_rice:": "🌾", ":bouquet:": "💐", ":tulip:": "🌷", ":rose:": "🌹", ":sunflower:": "🌻", ":blossom:": "🌼", ":cherry_blossom:": "🌸", ":hibiscus:": "🌺", ":earth_americas:": "🌎", ":earth_africa:": "🌍", ":earth_asia:": "🌏", ":full_moon:": "🌕", ":waning_gibbous_moon:": "🌖", ":waxing_gibbous_moon:": "🌔", ":new_moon_with_face:": "🌚", ":full_moon_with_face:": "🌝", ":sun_with_face:": "🌞", ":first_quarter_moon_with_face:": "🌛", ":last_quarter_moon_with_face:": "🌜", ":crescent_moon:": "🌙", ":dizzy:": "💫", ":star:": "⭐️", ":star2:": "🌟", ":sparkles:": "✨", ":zap:": "⚡️", ":fire:": "🔥", ":boom:": "💥", ":comet:": "☄", ":sunny:": "☀️", ":partly_sunny:": "⛅️", ":rainbow:": "🌈", ":cloud:": "☁️", ":snowman:": "⛄️", ":snowflake:": "❄️", ":wind_blowing_face:": "🌬", ":dash:": "💨", ":fog:": "🌫", ":ocean:": "🌊", ":droplet:": "💧", ":sweat_drops:": "💦", ":umbrella:": "☔️" };
var FOOD_SPORTS_EMOJIS = { ":green_apple:": "🍏", ":apple:": "🍎", ":pear:": "🍐", ":tangerine:": "🍊", ":lemon:": "🍋", ":banana:": "🍌", ":watermelon:": "🍉", ":grapes:": "🍇", ":strawberry:": "🍓", ":melon:": "🍈", ":cherries:": "🍒", ":peach:": "🍑", ":pineapple:": "🍍", ":tomato:": "🍅", ":eggplant:": "🍆", ":corn:": "🌽", ":hot_pepper:": "🌶", ":sweet_potato:": "🍠", ":chestnut:": "🌰", ":honey_pot:": "🍯", ":bread:": "🍞", ":egg:": "🍳", ":fried_shrimp:": "🍤", ":poultry_leg:": "🍗", ":meat_on_bone:": "🍖", ":pizza:": "🍕", ":hotdog:": "🌭", ":hamburger:": "🍔", ":fries:": "🍟", ":taco:": "🌮", ":burrito:": "🌯", ":spaghetti:": "🍝", ":ramen:": "🍜", ":stew:": "🍲", ":fish_cake:": "🍥", ":sushi:": "🍣", ":bento:": "🍱", ":curry:": "🍛", ":rice:": "🍚", ":rice_ball:": "🍙", ":rice_cracker:": "🍘", ":oden:": "🍢", ":dango:": "🍡", ":shaved_ice:": "🍧", ":ice_cream:": "🍨", ":icecream:": "🍦", ":cake:": "🍰", ":birthday:": "🎂", ":custard:": "🍮", ":lollipop:": "🍭", ":candy:": "🍬", ":chocolate_bar:": "🍫", ":popcorn:": "🍿", ":doughnut:": "🍩", ":cookie:": "🍪", ":baby_bottle:": "🍼", ":coffee:": "☕️", ":tea:": "🍵", ":sake:": "🍶", ":beer:": "🍺", ":beers:": "🍻", ":wine_glass:": "🍷", ":cocktail:": "🍸", ":tropical_drink:": "🍹", ":champagne:": "🍾", ":fork_and_knife:": "🍴", ":soccer:": "⚽️", ":basketball:": "🏀", ":football:": "🏈", ":baseball:": "⚾️", ":tennis:": "🎾", ":volleyball:": "🏐", ":rugby_football:": "🏉", ":8ball:": "🎱", ":golf:": "⛳️", ":bow_and_arrow:": "🏹", ":fishing_pole_and_fish:": "🎣", ":ice_skate:": "⛸", ":ski:": "🎿", ":skier:": "⛷", ":snowboarder:": "🏂", ":golfer:": "🏌", ":surfer:": "🏄", ":swimmer:": "🏊", ":rowboat:": "🚣", ":horse_racing:": "🏇", ":bicyclist:": "🚴", ":mountain_bicyclist:": "🚵", ":clapper:": "🎬", ":microphone:": "🎤", ":headphones:": "🎧", ":musical_score:": "🎼", ":musical_keyboard:": "🎹", ":saxophone:": "🎷", ":trumpet:": "🎺", ":guitar:": "🎸", ":violin:": "🎻", ":game_die:": "🎲", ":dart:": "🎯", ":bowling:": "🎳", ":video_game:": "🎮", ":checkered_flag:": "🏁", ":triangular_flag_on_post:": "🚩", ":running_shirt_with_sash:": "🎽", ":trophy:": "🏆" };
var TRAVEL_PLACES_EMOJIS = { ":red_car:": "🚗", ":taxi:": "🚕", ":blue_car:": "🚙", ":bus:": "🚌", ":trolleybus:": "🚎", ":police_car:": "🚓", ":ambulance:": "🚑", ":fire_engine:": "🚒", ":minibus:": "🚐", ":truck:": "🚚", ":articulated_lorry:": "🚛", ":tractor:": "🚜", ":bike:": "🚲", ":rotating_light:": "🚨", ":oncoming_police_car:": "🚔", ":oncoming_bus:": "🚍", ":oncoming_automobile:": "🚘", ":oncoming_taxi:": "🚖", ":aerial_tramway:": "🚡", ":mountain_cableway:": "🚠", ":suspension_railway:": "🚟", ":railway_car:": "🚃", ":train:": "🚋", ":mountain_railway:": "🚞", ":monorail:": "🚝", ":bullettrain_side:": "🚄", ":bullettrain_front:": "🚅", ":light_rail:": "🚈", ":steam_locomotive:": "🚂", ":train2:": "🚆", ":metro:": "🚇", ":tram:": "🚊", ":station:": "🚉", ":helicopter:": "🚁", ":airplane:": "✈️", ":airplane_departure:": "🛫", ":airplane_arriving:": "🛬", ":rocket:": "🚀", ":seat:": "💺", ":sailboat:": "⛵️", ":speedboat:": "🚤", ":ferry:": "⛴", ":ship:": "🚢", ":anchor:": "⚓️", ":construction:": "🚧", ":fuelpump:": "⛽️", ":busstop:": "🚏", ":vertical_traffic_light:": "🚦", ":traffic_light:": "🚥", ":moyai:": "🗿", ":statue_of_liberty:": "🗽", ":fountain:": "⛲️", ":tokyo_tower:": "🗼", ":european_castle:": "🏰", ":japanese_castle:": "🏯", ":stadium:": "🏟", ":ferris_wheel:": "🎡", ":roller_coaster:": "🎢", ":carousel_horse:": "🎠", ":mountain:": "⛰", ":mount_fuji:": "🗻", ":volcano:": "🌋", ":desert:": "🏜", ":camping:": "🏕", ":tent:": "⛺️", ":railway_track:": "🛤", ":motorway:": "🛣", ":factory:": "🏭", ":house:": "🏠", ":house_with_garden:": "🏡", ":office:": "🏢", ":department_store:": "🏬", ":post_office:": "🏣", ":european_post_office:": "🏤", ":hospital:": "🏥", ":bank:": "🏦", ":hotel:": "🏨", ":convenience_store:": "🏪", ":school:": "🏫", ":love_hotel:": "🏩", ":wedding:": "💒", ":classical_building:": "🏛", ":church:": "⛪️", ":mosque:": "🕌", ":synagogue:": "🕍", ":kaaba:": "🕋", ":shinto_shrine:": "⛩", ":japan:": "🗾", ":rice_scene:": "🎑", ":sunrise:": "🌅", ":sunrise_over_mountains:": "🌄", ":stars:": "🌠", ":sparkler:": "🎇", ":fireworks:": "🎆", ":city_sunset:": "🌆", ":cityscape:": "🏙", ":night_with_stars:": "🌃", ":milky_way:": "🌌", ":bridge_at_night:": "🌉", ":foggy:": "🌁", ":performing_arts:": "🎭", ":art:": "🎨" };
var OBJECTS_EMOJIS = { ":free:": "🆓", ":green_book:": "📗", ":closed_book:": "📕", ":watch:": "⌚️", ":iphone:": "📱", ":calling:": "📲", ":computer:": "💻", ":keyboard:": "⌨", ":printer:": "🖨", ":trackball:": "🖲", ":joystick:": "🕹", ":compression:": "🗜", ":minidisc:": "💽", ":floppy_disk:": "💾", ":cd:": "💿", ":dvd:": "📀", ":vhs:": "📼", ":camera:": "📷", ":camera_with_flash:": "📸", ":video_camera:": "📹", ":movie_camera:": "🎥", ":film_frames:": "🎞", ":telephone_receiver:": "📞", ":telephone:": "☎️", ":pager:": "📟", ":fax:": "📠", ":tv:": "📺", ":radio:": "📻", ":level_slider:": "🎚", ":control_knobs:": "🎛", ":stopwatch:": "⏱", ":alarm_clock:": "⏰", ":hourglass:": "⌛️", ":hourglass_flowing_sand:": "⏳", ":satellite:": "🛰", ":battery:": "🔋", ":electric_plug:": "🔌", ":bulb:": "💡", ":flashlight:": "🔦", ":candle:": "🕯", ":wastebasket:": "🗑", ":money_with_wings:": "💸", ":dollar:": "💵", ":yen:": "💴", ":euro:": "💶", ":pound:": "💷", ":moneybag:": "💰", ":credit_card:": "💳", ":gem:": "💎", ":scales:": "⚖", ":wrench:": "🔧", ":hammer:": "🔨", ":pick:": "⛏", ":gear:": "⚙", ":bomb:": "💣", ":knife:": "🔪", ":crossed_swords:": "⚔", ":shield:": "🛡", ":smoking:": "🚬", ":coffin:": "⚰", ":amphora:": "🏺", ":crystal_ball:": "🔮", ":prayer_beads:": "📿", ":barber:": "💈", ":alembic:": "⚗", ":telescope:": "🔭", ":microscope:": "🔬", ":hole:": "🕳", ":pill:": "💊", ":syringe:": "💉", ":thermometer:": "🌡", ":toilet:": "🚽", ":potable_water:": "🚰", ":shower:": "🚿", ":bathtub:": "🛁", ":bath:": "🛀", ":key:": "🔑", ":door:": "🚪", ":bed:": "🛏", ":shopping_bags:": "🛍", ":gift:": "🎁", ":balloon:": "🎈", ":flags:": "🎏", ":ribbon:": "🎀", ":confetti_ball:": "🎊", ":tada:": "🎉", ":dolls:": "🎎", ":izakaya_lantern:": "🏮", ":wind_chime:": "🎐", ":envelope:": "✉️", ":mailbox_closed:": "📪", ":postbox:": "📮", ":postal_horn:": "📯", ":scroll:": "📜", ":page_with_curl:": "📃", ":page_facing_up:": "📄", ":bookmark_tabs:": "📑", ":bar_chart:": "📊", ":chart_with_upwards_trend:": "📈", ":chart_with_downwards_trend:": "📉", ":calendar:": "📆", ":date:": "📅", ":card_index:": "📇", ":file_cabinet:": "🗄", ":clipboard:": "📋", ":newspaper:": "📰", ":blue_book:": "📘", ":books:": "📚", ":book:": "📖", ":bookmark:": "🔖", ":link:": "🔗", ":paperclip:": "📎", ":triangular_ruler:": "📐", ":straight_ruler:": "📏", ":round_pushpin:": "📍", ":pushpin:": "📌", ":pencil:": "📝", ":pencil2:": "✏️", ":mag:": "🔍", ":unlock:": "🔓" };
var SYMBOLS_FLAGS_EMOJIS = { ":heart:": "❤️", ":yellow_heart:": "💛", ":green_heart:": "💚", ":blue_heart:": "💙", ":purple_heart:": "💜", ":broken_heart:": "💔", ":two_hearts:": "💕", ":revolving_hearts:": "💞", ":heartbeat:": "💓", ":heartpulse:": "💗", ":sparkling_heart:": "💖", ":cupid:": "💘", ":gift_heart:": "💝", ":heart_decoration:": "💟", ":star_and_crescent:": "☪", ":om_symbol:": "🕉", ":wheel_of_dharma:": "☸", ":star_of_david:": "✡", ":six_pointed_star:": "🔯", ":yin_yang:": "☯", ":orthodox_cross:": "☦", ":place_of_worship:": "🛐", ":ophiuchus:": "⛎", ":aries:": "♈️", ":taurus:": "♉️", ":gemini:": "♊️", ":cancer:": "♋️", ":leo:": "♌️", ":virgo:": "♍️", ":libra:": "♎️", ":scorpius:": "♏️", ":sagittarius:": "♐️", ":capricorn:": "♑️", ":aquarius:": "♒️", ":pisces:": "♓️", ":id:": "🆔", ":accept:": "🉑", ":mobile_phone_off:": "📴", ":vibration_mode:": "📳", ":u6709:": "🈶", ":u7121:": "🈚️", ":u7533:": "🈸", ":u55b6:": "🈺", ":u6708:": "🈷️", ":eight_pointed_black_star:": "✴️", ":vs:": "🆚", ":white_flower:": "💮", ":ideograph_advantage:": "🉐", ":secret:": "㊙️", ":congratulations:": "㊗️", ":u5408:": "🈴", ":u6e80:": "🈵", ":u5272:": "🈹", ":u7981:": "🈲", ":x:": "❌", ":o:": "⭕️", ":no_entry:": "⛔️", ":name_badge:": "📛", ":no_entry_sign:": "🚫", ":100:": "💯", ":anger:": "💢", ":hotsprings:": "♨️", ":no_pedestrians:": "🚷", ":do_not_litter:": "🚯", ":no_bicycles:": "🚳", ":non-potable_water:": "🚱", ":underage:": "🔞", ":no_mobile_phones:": "📵", ":no_smoking:": "🚭", ":grey_exclamation:": "❕", ":grey_question:": "❔", ":bangbang:": "‼️", ":interrobang:": "⁉️", ":low_brightness:": "🔅", ":high_brightness:": "🔆", ":part_alternation_mark:": "〽️", ":warning:": "⚠️", ":children_crossing:": "🚸", ":trident:": "🔱", ":beginner:": "🔰", ":recycle:": "♻️", ":white_check_mark:": "✅", ":u6307:": "🈯️", ":chart:": "💹", ":sparkle:": "❇️", ":eight_spoked_asterisk:": "✳️", ":negative_squared_cross_mark:": "❎", ":globe_with_meridians:": "🌐", ":diamond_shape_with_a_dot_inside:": "💠", ":m:": "Ⓜ️", ":cyclone:": "🌀", ":zzz:": "💤", ":womens:": "🚺", ":baby_symbol:": "🚼", ":musical_note:": "🎵", ":notes:": "🎶", ":heavy_plus_sign:": "➕", ":heavy_minus_sign:": "➖", ":heavy_division_sign:": "➗", ":heavy_multiplication_x:": "✖️", ":heavy_dollar_sign:": "💲", ":currency_exchange:": "💱", ":tm:": "™️", ":copyright:": "©️", ":registered:": "®️", ":wavy_dash:": "〰️", ":curly_loop:": "➰", ":loop:": "➿", ":end:": "🔚", ":back:": "🔙", ":on:": "🔛", ":top:": "🔝", ":heavy_check_mark:": "✔️", ":ballot_box_with_check:": "☑️", ":speaker:": "🔈", ":mute:": "🔇", ":sound:": "🔉", ":loud_sound:": "🔊", ":bell:": "🔔", ":no_bell:": "🔕", ":mega:": "📣", ":loudspeaker:": "📢", ":speech_balloon:": "💬", ":thought_balloon:": "💭", ":spades:": "♠️", ":clubs:": "♣️", ":hearts:": "♥️", ":diamonds:": "♦️", ":black_joker:": "🃏", ":flower_playing_cards:": "🎴", ":mahjong:": "🀄️" };

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleEmojis',
    value: function toggleEmojis(emoji) {
      switch (emoji) {
        case 'PEOPLE_EMOJIS':
          this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' });
          break;
        case 'ANIMALS_NATURE_EMOJIS':
          this.setState({ emojis: ANIMALS_NATURE_EMOJIS, emojiCategory: 'ANIMALS_NATURE_EMOJIS' });
          break;
        case 'FOOD_SPORTS_EMOJIS':
          this.setState({ emojis: FOOD_SPORTS_EMOJIS, emojiCategory: 'FOOD_SPORTS_EMOJIS' });
          break;
        case 'TRAVEL_PLACES_EMOJIS':
          this.setState({ emojis: TRAVEL_PLACES_EMOJIS, emojiCategory: 'TRAVEL_PLACES_EMOJIS' });
          break;
        case 'OBJECTS_EMOJIS':
          this.setState({ emojis: OBJECTS_EMOJIS, emojiCategory: 'OBJECTS_EMOJIS' });
          break;
        case 'SYMBOLS_FLAGS_EMOJIS':
          this.setState({ emojis: SYMBOLS_FLAGS_EMOJIS, emojiCategory: 'SYMBOLS_FLAGS_EMOJIS' });
          break;
        default:
          this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' });
      }
    }
  }, {
    key: 'onEmojiSelect',
    value: function onEmojiSelect(e) {
      var emoji = _emojione2.default.toShort(e);
      emoji ? this.props.onEmojiSelected(emoji) : null;
    }
  }, {
    key: 'stripColons',
    value: function stripColons(str) {
      var colonIndex = str.indexOf(':');
      if (colonIndex > -1) {
        if (colonIndex === str.length - 1) {
          str = str.substring(0, colonIndex);
          return this.stripColons(str);
        } else {
          str = str.substr(colonIndex + 1);
          return this.stripColons(str);
        }
      }

      return str;
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this2 = this;

      var emojiCategory = this.state.emojiCategory;

      return _react2.default.createElement(
        Tabs,
        null,
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'PEOPLE_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('PEOPLE_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('😀') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'ANIMALS_NATURE_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('ANIMALS_NATURE_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🦊') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'FOOD_SPORTS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('FOOD_SPORTS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🍏') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'TRAVEL_PLACES_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('TRAVEL_PLACES_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('🚗') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'OBJECTS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('OBJECTS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('💎') } }),
        _react2.default.createElement(Title, {
          selected: emojiCategory === 'SYMBOLS_FLAGS_EMOJIS',
          onClick: function onClick() {
            _this2.toggleEmojis('SYMBOLS_FLAGS_EMOJIS');
          },
          dangerouslySetInnerHTML: { __html: _emojione2.default.unicodeToImage('❤️') } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var emojis = this.state.emojis;
      var _props = this.props,
          visible = _props.visible,
          modal = _props.modal;

      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          EmojiPickerWrapper,
          { visible: visible, modal: modal },
          this.renderTabs(),
          _react2.default.createElement(
            EmojiWrapper,
            null,
            Object.keys(emojis).map(function (index) {
              return _react2.default.createElement(Emoji, {
                className: 'ld-emoji',
                key: index,
                role: 'presentation',
                onClick: _this3.onEmojiSelect.bind(_this3, emojis[index]),
                dangerouslySetInnerHTML: { __html: emojis[index] } });
            })
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        onEmojiSelected: _react2.default.PropTypes.func.isRequired,
        visible: _react2.default.PropTypes.bool,
        modal: _react2.default.PropTypes.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        visible: true,
        modal: false
      };
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


var Wrapper = _styledComponents2.default.div(_templateObject);

var EmojiPickerWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.modal ? 'absolute' : 'static';
}, function (props) {
  return props.visible ? 1 : 0;
});

var EmojiPicker = _styledComponents2.default.div(_templateObject3);

var EmojiWrapper = _styledComponents2.default.div(_templateObject4);

var Emoji = _styledComponents2.default.span(_templateObject5);

var Tabs = _styledComponents2.default.div(_templateObject6);

var Title = _styledComponents2.default.p(_templateObject7, function (props) {
  return props.selected ? '1' : '0.5';
});