// ========================================
// GLOBAL VARIABLES - Boda Esaú González & Lucero Estefania
// ========================================
const photos = [
    "imagenes/DSC_2905.webp",
    "imagenes/DSC_2906.webp",
    "imagenes/DSC_2907.webp",
    "imagenes/DSC_2908.webp",
    "imagenes/DSC_2909.webp",
    "imagenes/DSC_2910.webp",
    "imagenes/DSC_2911.webp",
    "imagenes/DSC_2912.webp",
    "imagenes/DSC_2913.webp",
    "imagenes/DSC_2914.webp",
    "imagenes/DSC_2915.webp",
    "imagenes/DSC_2916.webp",
    "imagenes/DSC_2919.webp",
    "imagenes/DSC_2920.webp",
    "imagenes/DSC_2921.webp",
    "imagenes/DSC_2922.webp",
    "imagenes/DSC_2923.webp",
    "imagenes/DSC_2924.webp",
    "imagenes/DSC_2925.webp",
    "imagenes/DSC_2926.webp",
    "imagenes/DSC_2927.webp",
    "imagenes/DSC_2928.webp",
    "imagenes/DSC_2929.webp",
    "imagenes/DSC_2930.webp",
    "imagenes/DSC_2932.webp",
    "imagenes/DSC_2933.webp",
    "imagenes/DSC_2934.webp",
    "imagenes/DSC_2935.webp",
    "imagenes/DSC_2936.webp",
    "imagenes/DSC_2937.webp",
    "imagenes/DSC_2938.webp",
    "imagenes/DSC_2939.webp",
    "imagenes/DSC_2940.webp",
    "imagenes/DSC_2941.webp",
    "imagenes/DSC_2942.webp",
    "imagenes/DSC_2943.webp",
    "imagenes/DSC_2944.webp",
    "imagenes/DSC_2945.webp",
    "imagenes/DSC_2946.webp",
    "imagenes/DSC_2947.webp",
    "imagenes/DSC_2948.webp",
    "imagenes/DSC_2949.webp",
    "imagenes/DSC_2950.webp",
    "imagenes/DSC_2951.webp",
    "imagenes/DSC_2952.webp",
    "imagenes/DSC_2953.webp",
    "imagenes/DSC_2954.webp",
    "imagenes/DSC_2955.webp",
    "imagenes/DSC_2956.webp",
    "imagenes/DSC_2957.webp",
    "imagenes/DSC_2958.webp",
    "imagenes/DSC_2959.webp",
    "imagenes/DSC_2960.webp",
    "imagenes/DSC_2961.webp",
    "imagenes/DSC_2962.webp",
    "imagenes/DSC_2963.webp",
    "imagenes/DSC_2964.webp",
    "imagenes/DSC_2965.webp",
    "imagenes/DSC_2966.webp",
    "imagenes/DSC_2967.webp",
    "imagenes/DSC_2968.webp",
    "imagenes/DSC_2969.webp",
    "imagenes/DSC_2970.webp",
    "imagenes/DSC_2971.webp",
    "imagenes/DSC_2972.webp",
    "imagenes/DSC_2973.webp",
    "imagenes/DSC_2974.webp",
    "imagenes/DSC_2975.webp",
    "imagenes/DSC_2976.webp",
    "imagenes/DSC_2977.webp",
    "imagenes/DSC_2978.webp",
    "imagenes/DSC_2979.webp",
    "imagenes/DSC_2980.webp",
    "imagenes/DSC_2981.webp",
    "imagenes/DSC_2982.webp",
    "imagenes/DSC_2983.webp",
    "imagenes/DSC_2984.webp",
    "imagenes/DSC_2985.webp",
    "imagenes/DSC_2986.webp",
    "imagenes/DSC_2987.webp",
    "imagenes/DSC_2988.webp",
    "imagenes/DSC_2989.webp",
    "imagenes/DSC_2990.webp",
    "imagenes/DSC_2991.webp",
    "imagenes/DSC_2992.webp",
    "imagenes/DSC_2993.webp",
    "imagenes/DSC_2994.webp",
    "imagenes/DSC_2995.webp",
    "imagenes/DSC_2996.webp",
    "imagenes/DSC_2997.webp",
    "imagenes/DSC_2998.webp",
    "imagenes/DSC_2999.webp",
    "imagenes/DSC_3000.webp",
    "imagenes/DSC_3001.webp",
    "imagenes/DSC_3002.webp",
    "imagenes/DSC_3003.webp",
    "imagenes/DSC_3004.webp",
    "imagenes/DSC_3005.webp",
    "imagenes/DSC_3006.webp",
    "imagenes/DSC_3007.webp",
    "imagenes/DSC_3008.webp",
    "imagenes/DSC_3009.webp",
    "imagenes/DSC_3010.webp",
    "imagenes/DSC_3011.webp",
    "imagenes/DSC_3012.webp",
    "imagenes/DSC_3013.webp",
    "imagenes/DSC_3014.webp",
    "imagenes/DSC_3015.webp",
    "imagenes/DSC_3016.webp",
    "imagenes/DSC_3017.webp",
    "imagenes/DSC_3018.webp",
    "imagenes/DSC_3019.webp",
    "imagenes/DSC_3020.webp",
    "imagenes/DSC_3021.webp",
    "imagenes/DSC_3022.webp",
    "imagenes/DSC_3023.webp",
    "imagenes/DSC_3024.webp",
    "imagenes/DSC_3025.webp",
    "imagenes/DSC_3026.webp",
    "imagenes/DSC_3027.webp",
    "imagenes/DSC_3028.webp",
    "imagenes/DSC_3029.webp",
    "imagenes/DSC_3030.webp",
    "imagenes/DSC_3031.webp",
    "imagenes/DSC_3032.webp",
    "imagenes/DSC_3033.webp",
    "imagenes/DSC_3034.webp",
    "imagenes/DSC_3035.webp",
    "imagenes/DSC_3036.webp",
    "imagenes/DSC_3037.webp",
    "imagenes/DSC_3038.webp",
    "imagenes/DSC_3039.webp",
    "imagenes/DSC_3040.webp",
    "imagenes/DSC_3041.webp",
    "imagenes/DSC_3042.webp",
    "imagenes/DSC_3043.webp",
    "imagenes/DSC_3044.webp",
    "imagenes/DSC_3045.webp",
    "imagenes/DSC_3046.webp",
    "imagenes/DSC_3047.webp",
    "imagenes/DSC_3048.webp",
    "imagenes/DSC_3049.webp",
    "imagenes/DSC_3050.webp",
    "imagenes/DSC_3051.webp",
    "imagenes/DSC_3052.webp",
    "imagenes/DSC_3053.webp",
    "imagenes/DSC_3054.webp",
    "imagenes/DSC_3055.webp",
    "imagenes/DSC_3056.webp",
    "imagenes/DSC_3057.webp",
    "imagenes/DSC_3058.webp",
    "imagenes/DSC_3059.webp",
    "imagenes/DSC_3060.webp",
    "imagenes/DSC_3061.webp",
    "imagenes/DSC_3062.webp",
    "imagenes/DSC_3063.webp",
    "imagenes/DSC_3064.webp",
    "imagenes/DSC_3065.webp",
    "imagenes/DSC_3066.webp",
    "imagenes/DSC_3067.webp",
    "imagenes/DSC_3068.webp",
    "imagenes/DSC_3069.webp",
    "imagenes/DSC_3070.webp",
    "imagenes/DSC_3071.webp",
    "imagenes/DSC_3072.webp",
    "imagenes/DSC_3073.webp",
    "imagenes/DSC_3074.webp",
    "imagenes/DSC_3075.webp",
    "imagenes/DSC_3076.webp",
    "imagenes/DSC_3077.webp",
    "imagenes/DSC_3078.webp",
    "imagenes/DSC_3079.webp",
    "imagenes/DSC_3080.webp",
    "imagenes/DSC_3081.webp",
    "imagenes/DSC_3082.webp",
    "imagenes/DSC_3083.webp",
    "imagenes/DSC_3084.webp",
    "imagenes/DSC_3085.webp",
    "imagenes/DSC_3086.webp",
    "imagenes/DSC_3087.webp",
    "imagenes/DSC_3088.webp",
    "imagenes/DSC_3089.webp",
    "imagenes/DSC_3090.webp",
    "imagenes/DSC_3091.webp",
    "imagenes/DSC_3092.webp",
    "imagenes/DSC_3093.webp",
    "imagenes/DSC_3094.webp",
    "imagenes/DSC_3095.webp",
    "imagenes/DSC_3096.webp",
    "imagenes/DSC_3097.webp",
    "imagenes/DSC_3098.webp",
    "imagenes/DSC_3099.webp",
    "imagenes/DSC_3100.webp",
    "imagenes/DSC_3101.webp",
    "imagenes/DSC_3102.webp",
    "imagenes/DSC_3103.webp",
    "imagenes/DSC_3104.webp",
    "imagenes/DSC_3105.webp",
    "imagenes/DSC_3106.webp",
    "imagenes/DSC_3107.webp",
    "imagenes/DSC_3108.webp",
    "imagenes/DSC_3109.webp",
    "imagenes/DSC_3110.webp",
    "imagenes/DSC_3111.webp",
    "imagenes/DSC_3112.webp",
    "imagenes/DSC_3113.webp",
    "imagenes/DSC_3114.webp",
    "imagenes/DSC_3115.webp",
    "imagenes/DSC_3116.webp",
    "imagenes/DSC_3117.webp",
    "imagenes/DSC_3118.webp",
    "imagenes/DSC_3119.webp",
    "imagenes/DSC_3120.webp",
    "imagenes/DSC_3121.webp",
    "imagenes/DSC_3122.webp",
    "imagenes/DSC_3123.webp",
    "imagenes/DSC_3124.webp",
    "imagenes/DSC_3125.webp",
    "imagenes/DSC_3126.webp",
    "imagenes/DSC_3127.webp",
    "imagenes/DSC_3128.webp",
    "imagenes/DSC_3129.webp",
    "imagenes/DSC_3130.webp",
    "imagenes/DSC_3131.webp",
    "imagenes/DSC_3132.webp",
    "imagenes/DSC_3133.webp",
    "imagenes/DSC_3134.webp",
    "imagenes/DSC_3135.webp",
    "imagenes/DSC_3136.webp",
    "imagenes/DSC_3137.webp",
    "imagenes/DSC_3138.webp",
    "imagenes/DSC_3139.webp",
    "imagenes/DSC_3140.webp",
    "imagenes/DSC_3141.webp",
    "imagenes/DSC_3142.webp",
    "imagenes/DSC_3143.webp",
    "imagenes/DSC_3144.webp",
    "imagenes/DSC_3145.webp",
    "imagenes/DSC_3146.webp",
    "imagenes/DSC_3147.webp",
    "imagenes/DSC_3148.webp",
    "imagenes/DSC_3149.webp",
    "imagenes/DSC_3150.webp",
    "imagenes/DSC_3151.webp",
    "imagenes/DSC_3152.webp",
    "imagenes/DSC_3153.webp",
    "imagenes/DSC_3154.webp",
    "imagenes/DSC_3155.webp",
    "imagenes/DSC_3156.webp",
    "imagenes/DSC_3157.webp",
    "imagenes/DSC_3158.webp",
    "imagenes/DSC_3159.webp",
    "imagenes/DSC_3160.webp",
    "imagenes/DSC_3161.webp",
    "imagenes/DSC_3162.webp",
    "imagenes/DSC_3163.webp",
    "imagenes/DSC_3164.webp",
    "imagenes/DSC_3165.webp",
    "imagenes/DSC_3166.webp",
    "imagenes/DSC_3167.webp",
    "imagenes/DSC_3168.webp",
    "imagenes/DSC_3169.webp",
    "imagenes/DSC_3170.webp",
    "imagenes/DSC_3171.webp",
    "imagenes/DSC_3172.webp",
    "imagenes/DSC_3173.webp",
    "imagenes/DSC_3174.webp",
    "imagenes/DSC_3175.webp",
    "imagenes/DSC_3176.webp",
    "imagenes/DSC_3177.webp",
    "imagenes/DSC_3178.webp",
    "imagenes/DSC_3179.webp",
    "imagenes/DSC_3180.webp",
    "imagenes/DSC_3181.webp",
    "imagenes/DSC_3183.webp",
    "imagenes/DSC_3184.webp",
    "imagenes/DSC_3185.webp",
    "imagenes/DSC_3186.webp",
    "imagenes/DSC_3187.webp",
    "imagenes/DSC_3188.webp",
    "imagenes/DSC_3189.webp",
    "imagenes/DSC_3190.webp",
    "imagenes/DSC_3191.webp",
    "imagenes/DSC_3192.webp",
    "imagenes/DSC_3193.webp",
    "imagenes/DSC_3194.webp",
    "imagenes/DSC_3195.webp",
    "imagenes/DSC_3196.webp",
    "imagenes/DSC_3197.webp",
    "imagenes/DSC_3198.webp",
    "imagenes/DSC_3199.webp",
    "imagenes/DSC_3200.webp",
    "imagenes/DSC_3201.webp",
    "imagenes/DSC_3202.webp",
    "imagenes/DSC_3203.webp",
    "imagenes/DSC_3204.webp",
    "imagenes/DSC_3205.webp",
    "imagenes/DSC_3206.webp",
    "imagenes/DSC_3207.webp",
    "imagenes/DSC_3208.webp",
    "imagenes/DSC_3209.webp",
    "imagenes/DSC_3210.webp",
    "imagenes/DSC_3211.webp",
    "imagenes/DSC_3212.webp",
    "imagenes/DSC_3213.webp",
    "imagenes/DSC_3214.webp",
    "imagenes/DSC_3215.webp",
    "imagenes/DSC_3216.webp",
    "imagenes/DSC_3217.webp",
    "imagenes/DSC_3218.webp",
    "imagenes/DSC_3219.webp",
    "imagenes/DSC_3220.webp",
    "imagenes/DSC_3221.webp",
    "imagenes/DSC_3222.webp",
    "imagenes/DSC_3223.webp",
    "imagenes/DSC_3224.webp",
    "imagenes/DSC_3225.webp",
    "imagenes/DSC_3226.webp",
    "imagenes/DSC_3227.webp",
    "imagenes/DSC_3228.webp",
    "imagenes/DSC_3229.webp",
    "imagenes/DSC_3230.webp",
    "imagenes/DSC_3231.webp",
    "imagenes/DSC_3232.webp",
    "imagenes/DSC_3233.webp",
    "imagenes/DSC_3234.webp",
    "imagenes/DSC_3235.webp",
    "imagenes/DSC_3236.webp",
    "imagenes/DSC_3237.webp",
    "imagenes/DSC_3238.webp",
    "imagenes/DSC_3239.webp",
    "imagenes/DSC_3240.webp",
    "imagenes/DSC_3241.webp",
    "imagenes/DSC_3242.webp",
    "imagenes/DSC_3243.webp",
    "imagenes/DSC_3244.webp",
    "imagenes/DSC_3245.webp",
    "imagenes/DSC_3246.webp",
    "imagenes/DSC_3247.webp",
    "imagenes/DSC_3248.webp",
    "imagenes/DSC_3249.webp",
    "imagenes/DSC_3250.webp",
    "imagenes/DSC_3251.webp",
    "imagenes/DSC_3252.webp",
    "imagenes/DSC_3253.webp",
    "imagenes/DSC_3255.webp",
    "imagenes/DSC_3256.webp",
    "imagenes/DSC_3257.webp",
    "imagenes/DSC_3258.webp",
    "imagenes/DSC_3259.webp",
    "imagenes/DSC_3260.webp",
    "imagenes/DSC_3261.webp",
    "imagenes/DSC_3262.webp",
    "imagenes/DSC_3263.webp",
    "imagenes/DSC_3264.webp",
    "imagenes/DSC_3265.webp",
    "imagenes/DSC_3266.webp",
    "imagenes/DSC_3267.webp",
    "imagenes/DSC_3268.webp",
    "imagenes/DSC_3269.webp",
    "imagenes/DSC_3270.webp",
    "imagenes/DSC_3271.webp",
    "imagenes/DSC_3272.webp",
    "imagenes/DSC_3274.webp",
    "imagenes/DSC_3275.webp",
    "imagenes/DSC_3276.webp",
    "imagenes/DSC_3277.webp",
    "imagenes/DSC_3278.webp",
    "imagenes/DSC_3279.webp",
    "imagenes/DSC_3280.webp",
    "imagenes/DSC_3281.webp",
    "imagenes/DSC_3282.webp",
    "imagenes/DSC_3283.webp",
    "imagenes/DSC_3284.webp",
    "imagenes/DSC_3285.webp",
    "imagenes/DSC_3286.webp",
    "imagenes/DSC_3287.webp",
    "imagenes/DSC_3288.webp",
    "imagenes/DSC_3289.webp",
    "imagenes/DSC_3290.webp",
    "imagenes/DSC_3291.webp",
    "imagenes/DSC_3292.webp",
    "imagenes/DSC_3293.webp",
    "imagenes/DSC_3294.webp",
    "imagenes/DSC_3295.webp",
    "imagenes/DSC_3296.webp",
    "imagenes/DSC_3297.webp",
    "imagenes/DSC_3298.webp",
    "imagenes/DSC_3299.webp",
    "imagenes/DSC_3300.webp",
    "imagenes/DSC_3301.webp",
    "imagenes/DSC_3302.webp",
    "imagenes/DSC_3303.webp",
    "imagenes/DSC_3304.webp",
    "imagenes/DSC_3305.webp",
    "imagenes/DSC_3306.webp",
    "imagenes/DSC_3307.webp",
    "imagenes/DSC_3308.webp",
    "imagenes/DSC_3309.webp",
    "imagenes/DSC_3310.webp",
    "imagenes/DSC_3311.webp",
    "imagenes/DSC_3312.webp",
    "imagenes/DSC_3313.webp",
    "imagenes/DSC_3314.webp",
    "imagenes/DSC_3315.webp",
    "imagenes/DSC_3316.webp",
    "imagenes/DSC_3317.webp",
    "imagenes/DSC_3318.webp",
    "imagenes/DSC_3319.webp",
    "imagenes/DSC_3320.webp",
    "imagenes/DSC_3321.webp",
    "imagenes/DSC_3322.webp",
    "imagenes/DSC_3323.webp",
    "imagenes/DSC_3324.webp",
    "imagenes/DSC_3325.webp",
    "imagenes/DSC_3326.webp",
    "imagenes/DSC_3327.webp",
    "imagenes/DSC_3328.webp",
    "imagenes/DSC_3329.webp",
    "imagenes/DSC_3330.webp",
    "imagenes/DSC_3331.webp",
    "imagenes/DSC_3332.webp",
    "imagenes/DSC_3333.webp",
    "imagenes/DSC_3334.webp",
    "imagenes/DSC_3335.webp",
    "imagenes/DSC_3336.webp",
    "imagenes/DSC_3337.webp",
    "imagenes/DSC_3338.webp",
    "imagenes/DSC_3339.webp",
    "imagenes/DSC_3340.webp",
    "imagenes/DSC_3341.webp",
    "imagenes/DSC_3342.webp",
    "imagenes/DSC_3343.webp",
    "imagenes/DSC_3344.webp",
    "imagenes/DSC_3345.webp",
    "imagenes/DSC_3346.webp",
    "imagenes/DSC_3347.webp",
    "imagenes/DSC_3348.webp",
    "imagenes/DSC_3349.webp",
    "imagenes/DSC_3350.webp",
    "imagenes/DSC_3351.webp",
    "imagenes/DSC_3352.webp",
    "imagenes/DSC_3353.webp",
    "imagenes/DSC_3354.webp",
    "imagenes/DSC_3355.webp",
    "imagenes/DSC_3356.webp",
    "imagenes/DSC_3357.webp",
    "imagenes/DSC_3358.webp",
    "imagenes/DSC_3359.webp",
    "imagenes/DSC_3360.webp",
    "imagenes/DSC_3361.webp",
    "imagenes/DSC_3362.webp",
    "imagenes/DSC_3363.webp",
    "imagenes/DSC_3364.webp",
    "imagenes/DSC_3365.webp",
    "imagenes/DSC_3366.webp",
    "imagenes/DSC_3367.webp",
    "imagenes/DSC_3368.webp",
    "imagenes/DSC_3369.webp",
    "imagenes/DSC_3370.webp",
    "imagenes/DSC_3371.webp",
    "imagenes/DSC_3372.webp",
    "imagenes/DSC_3373.webp",
    "imagenes/DSC_3374.webp",
    "imagenes/DSC_3375.webp",
    "imagenes/DSC_3376.webp",
    "imagenes/DSC_3377.webp",
    "imagenes/DSC_3378.webp",
    "imagenes/DSC_3379.webp",
    "imagenes/DSC_3380.webp",
    "imagenes/DSC_3381.webp",
    "imagenes/DSC_3382.webp",
    "imagenes/DSC_3383.webp",
    "imagenes/DSC_3384.webp",
    "imagenes/DSC_3385.webp",
    "imagenes/DSC_3386.webp",
    "imagenes/DSC_3387.webp",
    "imagenes/DSC_3388.webp",
    "imagenes/DSC_3389.webp",
    "imagenes/DSC_3390.webp",
    "imagenes/DSC_3391.webp",
    "imagenes/DSC_3392.webp",
    "imagenes/DSC_3393.webp",
    "imagenes/DSC_3394.webp",
    "imagenes/DSC_3395.webp",
    "imagenes/DSC_3396.webp",
    "imagenes/DSC_3397.webp",
    "imagenes/DSC_3398.webp",
    "imagenes/DSC_3399.webp",
    "imagenes/DSC_3400.webp",
    "imagenes/DSC_3401.webp",
    "imagenes/DSC_3402.webp",
    "imagenes/DSC_3403.webp",
    "imagenes/DSC_3404.webp",
    "imagenes/DSC_3405.webp",
    "imagenes/DSC_3406.webp",
    "imagenes/DSC_3407.webp",
    "imagenes/DSC_3408.webp",
    "imagenes/DSC_3409.webp",
    "imagenes/DSC_3410.webp",
    "imagenes/DSC_3411.webp",
    "imagenes/DSC_3412.webp",
    "imagenes/DSC_3413.webp",
    "imagenes/DSC_3414.webp",
    "imagenes/DSC_3415.webp",
    "imagenes/DSC_3416.webp",
    "imagenes/DSC_3417.webp",
    "imagenes/DSC_3418.webp",
    "imagenes/DSC_3419.webp",
    "imagenes/DSC_3420.webp",
    "imagenes/DSC_3421.webp",
    "imagenes/DSC_3422.webp",
    "imagenes/DSC_3423.webp",
    "imagenes/DSC_3424.webp",
    "imagenes/DSC_3425.webp",
    "imagenes/DSC_3426.webp",
    "imagenes/DSC_3427.webp",
    "imagenes/DSC_3428.webp",
    "imagenes/DSC_3429.webp",
    "imagenes/DSC_3430.webp",
    "imagenes/DSC_3431.webp",
    "imagenes/DSC_3432.webp",
    "imagenes/DSC_3433.webp",
    "imagenes/DSC_3434.webp",
    "imagenes/DSC_3435.webp",
    "imagenes/DSC_3436.webp",
    "imagenes/DSC_3437.webp",
    "imagenes/DSC_3438.webp",
    "imagenes/DSC_3439.webp",
    "imagenes/DSC_3440.webp",
    "imagenes/DSC_3441.webp",
    "imagenes/DSC_3442.webp",
    "imagenes/DSC_3443.webp",
    "imagenes/DSC_3444.webp",
    "imagenes/DSC_3445.webp",
    "imagenes/DSC_3446.webp",
    "imagenes/DSC_3447.webp",
    "imagenes/DSC_3448.webp",
    "imagenes/DSC_3449.webp",
    "imagenes/DSC_3450.webp",
    "imagenes/DSC_3451.webp",
    "imagenes/DSC_3452.webp",
    "imagenes/DSC_3453.webp",
    "imagenes/DSC_3454.webp",
    "imagenes/DSC_3455.webp",
    "imagenes/DSC_3456.webp",
    "imagenes/DSC_3457.webp",
    "imagenes/DSC_3458.webp",
    "imagenes/DSC_3459.webp",
    "imagenes/DSC_3460.webp",
    "imagenes/DSC_3461.webp",
    "imagenes/DSC_3462.webp",
    "imagenes/DSC_3463.webp",
    "imagenes/DSC_3464.webp",
    "imagenes/DSC_3465.webp",
    "imagenes/DSC_3466.webp",
    "imagenes/DSC_3467.webp",
    "imagenes/DSC_3468.webp",
    "imagenes/DSC_3469.webp",
    "imagenes/DSC_3470.webp",
    "imagenes/DSC_3471.webp",
    "imagenes/DSC_3472.webp",
    "imagenes/DSC_3473.webp",
    "imagenes/DSC_3474.webp",
    "imagenes/DSC_3475.webp",
    "imagenes/DSC_3476.webp",
    "imagenes/DSC_3477.webp",
    "imagenes/DSC_3478.webp",
    "imagenes/DSC_3479.webp",
    "imagenes/DSC_3480.webp",
    "imagenes/DSC_3481.webp",
    "imagenes/DSC_3482.webp",
    "imagenes/DSC_3483.webp",
    "imagenes/DSC_3484.webp",
    "imagenes/DSC_3485.webp",
    "imagenes/DSC_3486.webp",
    "imagenes/DSC_3487.webp",
    "imagenes/DSC_3488.webp",
    "imagenes/DSC_3489.webp",
    "imagenes/DSC_3490.webp",
    "imagenes/DSC_3491.webp",
    "imagenes/DSC_3492.webp",
    "imagenes/DSC_3493.webp",
    "imagenes/DSC_3494.webp",
    "imagenes/DSC_3495.webp",
    "imagenes/DSC_3496.webp",
    "imagenes/DSC_3497.webp",
    "imagenes/DSC_3498.webp",
    "imagenes/DSC_3499.webp",
    "imagenes/DSC_3500.webp",
    "imagenes/DSC_3501.webp",
    "imagenes/DSC_3502.webp",
    "imagenes/DSC_3503.webp",
    "imagenes/DSC_3504.webp",
    "imagenes/DSC_3505.webp",
    "imagenes/DSC_3506.webp",
    "imagenes/DSC_3507.webp",
    "imagenes/DSC_3508.webp",
    "imagenes/DSC_3509.webp",
    "imagenes/DSC_3510.webp",
    "imagenes/DSC_3511.webp",
    "imagenes/DSC_3512.webp",
    "imagenes/DSC_3513.webp",
    "imagenes/DSC_3514.webp",
    "imagenes/DSC_3515.webp",
    "imagenes/DSC_3516.webp",
    "imagenes/DSC_3517.webp",
    "imagenes/DSC_3518.webp",
    "imagenes/DSC_3519.webp",
    "imagenes/DSC_3520.webp",
    "imagenes/DSC_3521.webp",
    "imagenes/DSC_3522.webp",
    "imagenes/DSC_3523.webp",
    "imagenes/DSC_3524.webp",
    "imagenes/DSC_3525.webp",
    "imagenes/DSC_3526.webp",
    "imagenes/DSC_3527.webp",
    "imagenes/DSC_3528.webp",
    "imagenes/DSC_3529.webp",
    "imagenes/DSC_3530.webp",
    "imagenes/DSC_3531.webp",
    "imagenes/DSC_3532.webp",
    "imagenes/DSC_3533.webp",
    "imagenes/DSC_3534.webp",
    "imagenes/DSC_3535.webp",
    "imagenes/DSC_3536.webp",
    "imagenes/DSC_3537.webp",
    "imagenes/DSC_3538.webp",
    "imagenes/DSC_3539.webp",
    "imagenes/DSC_3540.webp",
    "imagenes/DSC_3541.webp",
    "imagenes/DSC_3542.webp",
    "imagenes/DSC_3543.webp",
    "imagenes/DSC_3544.webp",
    "imagenes/DSC_3545.webp",
    "imagenes/DSC_3546.webp",
    "imagenes/DSC_3547.webp",
    "imagenes/DSC_3548.webp",
    "imagenes/DSC_3549.webp",
    "imagenes/DSC_3550.webp",
    "imagenes/DSC_3551.webp",
    "imagenes/DSC_3552.webp",
    "imagenes/DSC_3553.webp",
    "imagenes/DSC_3554.webp",
    "imagenes/DSC_3555.webp",
    "imagenes/DSC_3556.webp",
    "imagenes/DSC_3557.webp",
    "imagenes/DSC_3558.webp",
    "imagenes/DSC_3559.webp",
    "imagenes/DSC_3560.webp",
    "imagenes/DSC_3561.webp",
    "imagenes/DSC_3562.webp",
    "imagenes/DSC_3563.webp",
    "imagenes/DSC_3564.webp",
    "imagenes/DSC_3565.webp",
    "imagenes/DSC_3566.webp",
    "imagenes/DSC_3567.webp",
    "imagenes/DSC_3568.webp",
    "imagenes/DSC_3569.webp",
    "imagenes/DSC_3570.webp",
    "imagenes/DSC_3571.webp",
    "imagenes/DSC_3572.webp",
    "imagenes/DSC_3573.webp",
    "imagenes/DSC_3574.webp",
    "imagenes/DSC_3575.webp",
    "imagenes/DSC_3576.webp",
    "imagenes/DSC_3577.webp",
    "imagenes/DSC_3578.webp",
    "imagenes/DSC_3579.webp",
    "imagenes/DSC_3580.webp",
    "imagenes/DSC_3581.webp",
    "imagenes/DSC_3582.webp",
    "imagenes/DSC_3583.webp",
    "imagenes/DSC_3584.webp",
    "imagenes/DSC_3585.webp",
    "imagenes/DSC_3586.webp",
    "imagenes/DSC_3587.webp",
    "imagenes/DSC_3588.webp",
    "imagenes/DSC_3589.webp",
    "imagenes/DSC_3590.webp",
    "imagenes/DSC_3591.webp",
    "imagenes/DSC_3592.webp",
    "imagenes/DSC_3593.webp",
    "imagenes/DSC_3594.webp",
    "imagenes/DSC_3595.webp",
    "imagenes/DSC_3596.webp",
    "imagenes/DSC_3597.webp",
    "imagenes/DSC_3598.webp",
    "imagenes/DSC_3599.webp",
    "imagenes/DSC_3600.webp",
    "imagenes/DSC_3601.webp",
    "imagenes/DSC_3602.webp",
    "imagenes/DSC_3603.webp",
    "imagenes/DSC_3604.webp",
    "imagenes/DSC_3605.webp",
    "imagenes/DSC_3606.webp",
    "imagenes/DSC_3607.webp",
    "imagenes/DSC_3608.webp",
    "imagenes/DSC_3609.webp",
    "imagenes/DSC_3610.webp",
    "imagenes/DSC_3611.webp",
    "imagenes/DSC_3612.webp",
    "imagenes/DSC_3613.webp",
    "imagenes/DSC_3614.webp",
    "imagenes/DSC_3615.webp",
    "imagenes/DSC_3616.webp",
    "imagenes/DSC_3617.webp",
    "imagenes/DSC_3618.webp",
    "imagenes/DSC_3619.webp",
    "imagenes/DSC_3620.webp",
    "imagenes/DSC_3621.webp",
    "imagenes/DSC_3622.webp",
    "imagenes/DSC_3623.webp",
    "imagenes/DSC_3624.webp",
    "imagenes/DSC_3625.webp",
    "imagenes/DSC_3626.webp",
    "imagenes/DSC_3627.webp",
    "imagenes/DSC_3628.webp",
    "imagenes/DSC_3629.webp",
    "imagenes/DSC_3630.webp",
    "imagenes/DSC_3631.webp",
    "imagenes/DSC_3632.webp",
    "imagenes/DSC_3633.webp",
    "imagenes/DSC_3634.webp",
    "imagenes/DSC_3635.webp",
    "imagenes/DSC_3636.webp",
    "imagenes/DSC_3637.webp",
    "imagenes/DSC_3638.webp",
    "imagenes/DSC_3639.webp",
    "imagenes/DSC_3640.webp",
    "imagenes/DSC_3641.webp",
    "imagenes/DSC_3642.webp",
    "imagenes/DSC_3643.webp",
    "imagenes/DSC_3644.webp",
    "imagenes/DSC_3645.webp",
    "imagenes/DSC_3646.webp",
    "imagenes/DSC_3647.webp",
    "imagenes/DSC_3648.webp",
    "imagenes/DSC_3649.webp",
    "imagenes/DSC_3650.webp",
    "imagenes/DSC_3651.webp",
    "imagenes/DSC_3652.webp",
    "imagenes/DSC_3653.webp",
    "imagenes/DSC_3654.webp",
    "imagenes/DSC_3655.webp",
    "imagenes/DSC_3656.webp",
    "imagenes/DSC_3657.webp",
    "imagenes/DSC_3658.webp",
    "imagenes/DSC_3659.webp",
    "imagenes/DSC_3660.webp",
    "imagenes/DSC_3661.webp",
    "imagenes/DSC_3662.webp",
    "imagenes/DSC_3663.webp",
    "imagenes/DSC_3664.webp",
    "imagenes/DSC_3665.webp",
    "imagenes/DSC_3666.webp",
    "imagenes/DSC_3667.webp",
    "imagenes/DSC_3668.webp",
    "imagenes/DSC_3669.webp",
    "imagenes/DSC_3670.webp",
    "imagenes/DSC_3671.webp",
    "imagenes/DSC_3672.webp",
    "imagenes/DSC_3673.webp",
    "imagenes/DSC_3674.webp",
    "imagenes/DSC_3675.webp",
    "imagenes/DSC_3676.webp",
    "imagenes/DSC_3677.webp",
    "imagenes/DSC_3678.webp",
    "imagenes/DSC_3679.webp",
    "imagenes/DSC_3680.webp",
    "imagenes/DSC_3681.webp",
    "imagenes/DSC_3682.webp",
    "imagenes/DSC_3683.webp",
    "imagenes/DSC_3684.webp",
    "imagenes/DSC_3685.webp",
    "imagenes/DSC_3686.webp",
    "imagenes/DSC_3687.webp",
    "imagenes/DSC_3688.webp",
    "imagenes/DSC_3689.webp",
    "imagenes/DSC_3690.webp",
    "imagenes/DSC_3691.webp",
    "imagenes/DSC_3692.webp",
    "imagenes/DSC_3693.webp",
    "imagenes/DSC_3694.webp",
    "imagenes/DSC_3695.webp",
    "imagenes/DSC_3696.webp",
    "imagenes/DSC_3697.webp",
    "imagenes/DSC_3698.webp",
    "imagenes/DSC_3699.webp",
    "imagenes/DSC_3700.webp",
    "imagenes/DSC_3701.webp",
    "imagenes/DSC_3702.webp",
    "imagenes/DSC_3703.webp",
    "imagenes/DSC_3704.webp",
    "imagenes/DSC_3705.webp",
    "imagenes/DSC_3706.webp",
    "imagenes/DSC_3707.webp",
    "imagenes/DSC_3708.webp",
    "imagenes/DSC_3709.webp",
    "imagenes/DSC_3710.webp",
    "imagenes/DSC_3711.webp",
    "imagenes/DSC_3712.webp",
    "imagenes/DSC_3713.webp",
    "imagenes/DSC_3714.webp",
    "imagenes/DSC_3715.webp",
    "imagenes/DSC_3716.webp",
    "imagenes/DSC_3717.webp",
    "imagenes/DSC_3718.webp",
    "imagenes/DSC_3719.webp",
    "imagenes/DSC_3720.webp",
    "imagenes/DSC_3721.webp",
    "imagenes/DSC_3722.webp",
    "imagenes/DSC_3723.webp",
    "imagenes/DSC_3724.webp",
    "imagenes/DSC_3725.webp",
    "imagenes/DSC_3726.webp",
    "imagenes/DSC_3727.webp",
    "imagenes/DSC_3728.webp",
    "imagenes/DSC_3729.webp",
    "imagenes/DSC_3730.webp",
    "imagenes/DSC_3731.webp",
    "imagenes/DSC_3732.webp",
    "imagenes/DSC_3733.webp",
    "imagenes/DSC_3734.webp",
    "imagenes/DSC_3735.webp",
    "imagenes/DSC_3736.webp",
    "imagenes/DSC_3737.webp",
    "imagenes/DSC_3738.webp",
    "imagenes/DSC_3739.webp",
    "imagenes/DSC_3740.webp",
    "imagenes/DSC_3741.webp",
    "imagenes/DSC_3742.webp",
    "imagenes/DSC_3743.webp",
    "imagenes/DSC_3744.webp",
    "imagenes/DSC_3745.webp",
    "imagenes/DSC_3746.webp",
    "imagenes/DSC_3747.webp",
    "imagenes/DSC_3748.webp",
    "imagenes/DSC_3749.webp",
    "imagenes/DSC_3750.webp",
    "imagenes/DSC_3751.webp",
    "imagenes/DSC_3752.webp",
    "imagenes/DSC_3753.webp",
    "imagenes/DSC_3754.webp",
    "imagenes/DSC_3755.webp",
    "imagenes/DSC_3756.webp",
    "imagenes/DSC_3757.webp",
    "imagenes/DSC_3758.webp",
    "imagenes/DSC_3759.webp",
    "imagenes/DSC_3760.webp",
    "imagenes/DSC_3761.webp",
    "imagenes/DSC_3762.webp",
    "imagenes/DSC_3763.webp",
    "imagenes/DSC_3764.webp",
    "imagenes/DSC_3765.webp",
    "imagenes/DSC_3766.webp",
    "imagenes/DSC_3767.webp",
    "imagenes/DSC_3768.webp",
    "imagenes/DSC_3769.webp",
    "imagenes/DSC_3770.webp",
    "imagenes/DSC_3771.webp",
    "imagenes/DSC_3772.webp",
    "imagenes/DSC_3773.webp",
    "imagenes/DSC_3774.webp",
    "imagenes/DSC_3775.webp",
    "imagenes/DSC_3776.webp",
    "imagenes/DSC_3777.webp",
    "imagenes/DSC_3778.webp",
    "imagenes/DSC_3779.webp",
    "imagenes/DSC_3780.webp",
    "imagenes/DSC_3781.webp",
    "imagenes/DSC_3782.webp",
    "imagenes/DSC_3783.webp",
    "imagenes/DSC_3784.webp",
    "imagenes/DSC_3785.webp",
    "imagenes/DSC_3786.webp",
    "imagenes/DSC_3787.webp",
    "imagenes/DSC_3788.webp",
    "imagenes/DSC_3789.webp",
    "imagenes/DSC_3790.webp",
    "imagenes/DSC_3791.webp",
    "imagenes/DSC_3792.webp",
    "imagenes/DSC_3793.webp",
    "imagenes/DSC_3794.webp",
    "imagenes/DSC_3795.webp",
    "imagenes/DSC_3796.webp",
    "imagenes/DSC_3797.webp",
    "imagenes/DSC_3798.webp",
    "imagenes/DSC_3799.webp",
    "imagenes/DSC_3800.webp",
    "imagenes/DSC_3801.webp",
    "imagenes/DSC_3802.webp",
    "imagenes/DSC_3803.webp",
    "imagenes/DSC_3804.webp",
    "imagenes/DSC_3805.webp",
    "imagenes/DSC_3806.webp",
    "imagenes/DSC_3807.webp",
    "imagenes/DSC_3808.webp",
    "imagenes/DSC_3809.webp",
    "imagenes/DSC_3810.webp",
    "imagenes/DSC_3811.webp",
    "imagenes/DSC_3812.webp",
    "imagenes/DSC_3813.webp",
    "imagenes/DSC_3814.webp",
    "imagenes/DSC_3815.webp",
    "imagenes/DSC_3816.webp",
    "imagenes/DSC_3817.webp",
    "imagenes/DSC_3818.webp",
    "imagenes/DSC_3819.webp",
    "imagenes/DSC_3820.webp",
    "imagenes/DSC_3821.webp",
    "imagenes/DSC_3822.webp",
    "imagenes/DSC_3823.webp",
    "imagenes/DSC_3824.webp",
    "imagenes/DSC_3825.webp",
    "imagenes/DSC_3826.webp",
    "imagenes/DSC_3827.webp",
    "imagenes/DSC_3828.webp",
    "imagenes/DSC_3829.webp",
    "imagenes/DSC_3830.webp",
    "imagenes/DSC_3831.webp",
    "imagenes/DSC_3832.webp",
    "imagenes/DSC_3833.webp",
    "imagenes/DSC_3834.webp",
    "imagenes/DSC_3835.webp",
    "imagenes/DSC_3836.webp",
    "imagenes/DSC_3837.webp",
    "imagenes/DSC_3838.webp",
    "imagenes/DSC_3839.webp",
    "imagenes/DSC_3840.webp",
    "imagenes/DSC_3841.webp",
    "imagenes/DSC_3842.webp",
    "imagenes/DSC_3843.webp",
    "imagenes/DSC_3844.webp",
    "imagenes/DSC_3845.webp",
    "imagenes/DSC_3846.webp",
    "imagenes/DSC_3847.webp",
    "imagenes/DSC_3849.webp",
    "imagenes/DSC_3850.webp",
    "imagenes/DSC_3851.webp",
    "imagenes/DSC_3852.webp",
    "imagenes/DSC_3853.webp",
    "imagenes/DSC_3854.webp",
    "imagenes/DSC_3855.webp",
    "imagenes/DSC_3856.webp",
    "imagenes/DSC_3857.webp",
    "imagenes/DSC_3858.webp",
    "imagenes/DSC_3859.webp",
    "imagenes/DSC_3860.webp",
    "imagenes/DSC_3861.webp",
    "imagenes/DSC_3862.webp",
    "imagenes/DSC_3863.webp",
    "imagenes/DSC_3864.webp",
    "imagenes/DSC_3865.webp",
    "imagenes/DSC_3866.webp",
    "imagenes/DSC_3867.webp",
    "imagenes/DSC_3868.webp",
    "imagenes/DSC_3869.webp",
    "imagenes/DSC_3870.webp",
    "imagenes/DSC_3871.webp",
    "imagenes/DSC_3872.webp",
    "imagenes/DSC_3873.webp",
    "imagenes/DSC_3874.webp",
    "imagenes/DSC_3875.webp",
    "imagenes/DSC_3876.webp",
    "imagenes/DSC_3877.webp",
    "imagenes/DSC_3878.webp",
    "imagenes/DSC_3879.webp",
    "imagenes/DSC_3880.webp",
    "imagenes/DSC_3881.webp",
    "imagenes/DSC_3882.webp",
    "imagenes/DSC_3883.webp",
    "imagenes/DSC_3884.webp",
    "imagenes/DSC_3885.webp",
    "imagenes/DSC_3886.webp",
    "imagenes/DSC_3887.webp",
    "imagenes/DSC_3888.webp",
    "imagenes/DSC_3889.webp",
    "imagenes/DSC_3890.webp",
    "imagenes/DSC_3891.webp",
    "imagenes/DSC_3892.webp",
    "imagenes/DSC_3893.webp",
    "imagenes/DSC_3894.webp",
    "imagenes/DSC_3895.webp",
    "imagenes/DSC_3896.webp",
    "imagenes/DSC_3897.webp",
    "imagenes/DSC_3898.webp",
    "imagenes/DSC_3899.webp",
    "imagenes/DSC_3900.webp",
    "imagenes/DSC_3901.webp",
    "imagenes/DSC_3902.webp",
    "imagenes/DSC_3903.webp",
    "imagenes/DSC_3904.webp",
    "imagenes/DSC_3905.webp",
    "imagenes/DSC_3906.webp",
    "imagenes/DSC_3907.webp",
    "imagenes/DSC_3908.webp",
    "imagenes/DSC_3909.webp",
    "imagenes/DSC_3910.webp",
    "imagenes/DSC_3911.webp",
    "imagenes/DSC_3912.webp",
    "imagenes/DSC_3913.webp",
    "imagenes/DSC_3914.webp",
    "imagenes/DSC_3915.webp",
    "imagenes/DSC_3916.webp",
    "imagenes/DSC_3917.webp",
    "imagenes/DSC_3918.webp"
];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}


const STORAGE_KEY = 'boda_esau_lucero_photo_selections';
const LIMITES = {
    impresion: 200,
    invitacion: null
};
const COSTO_FOTO_ADICIONAL = 15; // $15 MXN por foto adicional

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
let touchStartX = 0;
let touchStartY = 0;
let scrollPositionBeforeModal = 0;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        if (typeof sbDeleteAll === 'function') sbDeleteAll();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const extraCostDisplay = document.getElementById('extraCostDisplay');
    if (extraCostDisplay) {
        if (fotosAdicionales > 0) {
            extraCostDisplay.classList.add('visible');
            document.getElementById('extraCostAmount').textContent = `$${costoExtra} MXN`;
            document.getElementById('extraCostDetail').textContent = `${fotosAdicionales} foto${fotosAdicionales > 1 ? 's' : ''} adicional${fotosAdicionales > 1 ? 'es' : ''} x $${COSTO_FOTO_ADICIONAL}`;
        } else {
            extraCostDisplay.classList.remove('visible');
        }
    }

    const impresionCard = document.querySelector('.stat-card.impresion');
    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#ff9800';
            impresionCard.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">💒 Las fotos estarán disponibles próximamente</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💒 Álbum</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all': show = true; break;
            case 'impresion': show = selection.impresion === true; break;
            case 'invitacion': show = selection.invitacion === true; break;
            case 'descartada': show = selection.descartada === true; break;
            case 'sin-clasificar': show = !selection.impresion && !selection.invitacion && !selection.descartada; break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function updateFilterButtons() {
    const stats = getStats();

    const btnAll = document.getElementById('btnFilterAll');
    const btnImpresion = document.getElementById('btnFilterImpresion');
    const btnInvitacion = document.getElementById('btnFilterInvitacion');
    const btnDescartada = document.getElementById('btnFilterDescartada');
    const btnSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnAll) btnAll.textContent = `Todas (${photos.length})`;
    if (btnImpresion) btnImpresion.textContent = `Impresión (${stats.impresion})`;
    if (btnInvitacion) btnInvitacion.textContent = `Álbum (${stats.invitacion})`;
    if (btnDescartada) btnDescartada.textContent = `Descartadas (${stats.descartada})`;
    if (btnSinClasificar) btnSinClasificar.textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;
    document.getElementById('modalImage').src = photo;
    document.getElementById('modalImage').alt = displayNumber;

    const selection = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();

    scrollPositionBeforeModal = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionBeforeModal}px`;
    document.body.style.width = '100%';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPositionBeforeModal);

    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === 'next') {
        newIndex = (currentPhotoIndex + 1) % photos.length;
    } else {
        newIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
        if (typeof sbSaveSelection === 'function') sbSaveSelection(currentPhotoIndex, selectedCategories);
    } else {
        delete photoSelections[currentPhotoIndex];
        if (typeof sbDeleteSelection === 'function') sbDeleteSelection(currentPhotoIndex);
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');
    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
        if (typeof sbSaveSelection === 'function') sbSaveSelection(currentPhotoIndex, selectedCategories);
    } else {
        delete photoSelections[currentPhotoIndex];
        if (typeof sbDeleteSelection === 'function') sbDeleteSelection(currentPhotoIndex);
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const exportData = {
        evento: 'Boda - Esaú González & Lucero Estefania',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: stats,
        fotos_incluidas: LIMITES.impresion,
        fotos_adicionales: fotosAdicionales,
        costo_adicional: costoExtra,
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                impresion: selection.impresion || false,
                album: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-esau-lucero-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    let summary = '💒 SELECCIÓN DE FOTOS - BODA ESAÚ GONZÁLEZ & LUCERO ESTEFANIA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   📸 Impresión incluida: ${LIMITES.impresion} fotos\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos disponibles: ${photos.length}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ ADICIONALES' : '⚠️ FALTA'}\n`;
    summary += `   💒 Para álbum: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    if (fotosAdicionales > 0) {
        summary += `💰 COSTO ADICIONAL:\n`;
        summary += `   Fotos adicionales: ${fotosAdicionales}\n`;
        summary += `   Costo por foto: $${COSTO_FOTO_ADICIONAL} MXN\n`;
        summary += `   TOTAL ADICIONAL: $${costoExtra} MXN\n\n`;
    }

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    // Filter buttons
    const btnFilterAll = document.getElementById('btnFilterAll');
    const btnFilterImpresion = document.getElementById('btnFilterImpresion');
    const btnFilterInvitacion = document.getElementById('btnFilterInvitacion');
    const btnFilterDescartada = document.getElementById('btnFilterDescartada');
    const btnFilterSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnFilterAll) btnFilterAll.addEventListener('click', () => setFilter('all'));
    if (btnFilterImpresion) btnFilterImpresion.addEventListener('click', () => setFilter('impresion'));
    if (btnFilterInvitacion) btnFilterInvitacion.addEventListener('click', () => setFilter('invitacion'));
    if (btnFilterDescartada) btnFilterDescartada.addEventListener('click', () => setFilter('descartada'));
    if (btnFilterSinClasificar) btnFilterSinClasificar.addEventListener('click', () => setFilter('sin-clasificar'));

    // Action buttons
    const btnExport = document.getElementById('btnExport');
    const btnShare = document.getElementById('btnShare');
    const btnClear = document.getElementById('btnClear');

    if (btnExport) btnExport.addEventListener('click', exportToJSON);
    if (btnShare) btnShare.addEventListener('click', copyToClipboard);
    if (btnClear) btnClear.addEventListener('click', clearAllSelections);

    // Modal controls
    const modalClose = document.querySelector('.modal-close');
    const btnCancelSelection = document.getElementById('btnCancelSelection');
    const btnSaveSelection = document.getElementById('btnSaveSelection');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (btnCancelSelection) btnCancelSelection.addEventListener('click', closeModal);
    if (btnSaveSelection) btnSaveSelection.addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('selected'));
    });

    // Close modal on outside click + swipe táctil
    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target.id === 'photoModal') closeModal();
        });

        photoModal.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        photoModal.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                navigatePhoto(deltaX > 0 ? 'prev' : 'next');
            }
        }, { passive: true });
    }

    // Navigation buttons
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) btnPrevPhoto.addEventListener('click', () => navigatePhoto('prev'));
    if (btnNextPhoto) btnNextPhoto.addEventListener('click', () => navigatePhoto('next'));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') navigatePhoto('prev');
            else if (e.key === 'ArrowRight') navigatePhoto('next');
        }
    });

});

// Auto-save on visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) saveSelections();
});

window.addEventListener('beforeunload', () => {
    saveSelections();
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
